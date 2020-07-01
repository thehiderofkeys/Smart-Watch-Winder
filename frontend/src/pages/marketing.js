import React from 'react';

import {Container, Grid, Typography, Button, makeStyles} from '@material-ui/core';

import {ReactComponent as WordMark} from '../images/WordMark.svg';
import WinderAndMockup from '../images/WinderAndMockup.png';

/**
 * @return {JSX} JSX element for the marketing page.
 */
function MarketingPage() {
  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={3} alignItems="center" className={classes.container}>
        <Grid item xs={3}>
          <WordMark className={classes.wordMark}/>
          <div className={classes.wordMarkBackground}/>
        </Grid>
        <Grid item xs={9}>
          <img src={WinderAndMockup} className={classes.mockup}/>
        </Grid>
        <Grid item xs={3}>
          <Typography variant='h4' align='right' className={classes.contrastingText}>
            A watch winder that&apos;s smart.
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant='h5'> Not a winder for your smart watch. </Typography>
          <Typography variant='h6'>
            This winder is connected to the internet. So you can control your winder, wherever you are.
          </Typography>
        </Grid>
        <Grid item xs={3}/>
        <Grid item xs={9}>
          <Button variant="contained" color="secondary">Take it for a spin!</Button>
        </Grid>
      </Grid>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '100px',
  },
  wordMark: {
    fill: 'white',
    maxWidth: '100%',
  },
  wordMarkBackground: {
    'position': 'fixed',
    'top': '0',
    'left': '0',
    'bottom': '0',
    'width': 'calc(50vw - 310px)',
    'minWidth': 'calc(24.5vw + 16px)',
    'background': '#246ce9',
    'zIndex': '-1',
  },
  mockup: {
    marginLeft: '-5%',
    maxWidth: '90%',
    maxHeight: '100%',
  },
  contrastingText: {
    color: 'white',
  },
}));

export default MarketingPage;
