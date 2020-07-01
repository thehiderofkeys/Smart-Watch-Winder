import googleapis from 'googleapis';
import fs from 'fs';
import {User} from '../db/schema';

const {google} = googleapis;

const PRODUCTION = process.env.NODE_ENV === 'production';
const cred = JSON.parse(process.env.GOOGLE_CRED? process.env.GOOGLE_CRED:fs.readFileSync('./credentials.json'));
const authScope = ['https://www.googleapis.com/auth/userinfo.profile'];

const oAuth2Client = new google.auth.OAuth2(
    cred.web.client_id,
    cred.web.client_secret,
    cred.web.redirect_uris[0],
);

export default (router) => {
  router.get('/login', (req, res) => {
    const authUrl = oAuth2Client.generateAuthUrl({access_type: 'offline', scope: authScope.join(' ')});
    res.send(authUrl);
  });

  router.get('/callback', (req, res) => {
    const code = req.query.code;
    oAuth2Client.getToken(code, (err, token) =>{
      oAuth2Client.setCredentials(token);
      const oauth2 = google.oauth2({auth: oAuth2Client, version: 'v2'});
      oauth2.userinfo.get((err, userRes) => {
        req.session.user = userRes.data;
        createUser(token, userRes.data);
        console.log('User logged in!');
        res.redirect(PRODUCTION ? '/landing':'http://localhost:3000/landing');
      });
    });
  });

  router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect(PRODUCTION ? '/':'http://localhost:3000/');
  });
};

/**
 * Crates a new user, updates existing token if already created
 * @param {Object} token Google API Access Token
 * @param {Object} userData Google User Info Object
 */
async function createUser(token, userData) {
  const existingUser = await User.findOneAndUpdate({'googleId': userData.id}, {$set: {'token': token}});
  if (!existingUser) {
    const newUser = new User();
    newUser.token = token;
    newUser.googleId = userData.id;
    newUser.firstName = userData.given_name;
    newUser.lastName = userData.family_name;
    await newUser.save();
    console.log(`New user saved! _id = ${newUser._id}`);
  }
}
