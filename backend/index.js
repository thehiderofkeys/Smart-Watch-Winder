import express from 'express';
import session from 'express-session';
import {createServer} from 'http';
import socketIO from 'socket.io';

import apiRouter from './api';

const PORT = process.env.PORT || 10000;

const app = express();
app.use(
    session({
      secret: 'hello world',
      saveUninitialized: false,
      resave: true,
    }),
);
app.use('/api', apiRouter);

const server = createServer(app);
const sockets = socketIO(server);

sockets.on('connection', (socket) => {
  console.log('connected');
});

server.listen(PORT, () => {
  console.log(`listening on :${PORT}!`);
});
