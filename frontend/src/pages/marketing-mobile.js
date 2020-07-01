import React from 'react';

import {Container, Grid, makeStyles, Button, Card, CardContent, Typography} from '@material-ui/core';

import {ReactComponent as WordMarkLeft} from '../images/SplitWordMarkLeft.svg';
import {ReactComponent as WordMarkRight} from '../images/SplitWordMarkRight.svg';
import Winder from '../images/Winder.png';
import Mockup from '../images/Mockup.png';

/**
 * @return {JSX} JSX element for the mobile version of the marketing page.
 */
function MobileMarketingPage() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <div className={classes.wordMarkBackground}/>
      <Grid container spacing={3} alignItems="center" className={classes.container}>
        <Grid item xs={12}>
          <WordMarkLeft fill='white' className={classes.wordMark}/>
          <WordMarkRight fill='black' className={classes.wordMark}/>
        </Grid>
        <Grid item xs={12}>
          <img src={Winder} className={classes.winder}/>
        </Grid>
        <Grid item align='center' xs={12}>
          <Button variant="contained" color="secondary">Take it for a spin!</Button>
        </Grid>
        <Grid item spacing={0} xs={12}>

          <img src={Mockup} className={classes.mockup}/>
          <Card>
            <CardContent>
              <Typography variant='h6' > A watch winder that&apos;s smart. </Typography>
              <Typography variant='body2'> Not a winder for your smart watch. </Typography>
              <Typography variant='body2'>This winder is connected to the internet, so you can control your winder, wherever you are.</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '50px',
    position: 'relative',
    height: '100%',
  },
  wordMark: {
    width: '50%',
  },
  wordMarkBackground: {
    position: 'absolute',
    top: '-50vh',
    right: '50%',
    bottom: '0',
    width: '50vw',
    background: '#246ce9',
    zIndex: '-1',
  },
  winder: {
    width: '100%',
  },
  mockup: {
    width: '100%',
  },
}));

export default MobileMarketingPage;
