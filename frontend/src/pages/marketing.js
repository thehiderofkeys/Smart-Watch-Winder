import React from 'react';

import {Container, Grid, makeStyles} from '@material-ui/core';

import {ReactComponent as WordMark} from '../WordMark.svg';
import Mockup from '../Mockup.png';

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
          <img src={Mockup} className={classes.mockup}/>
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
    'width': 'calc(50vw - 260px)',
    'minWidth': 'calc(28.5vw + 16px)',
    'background': '#246ce9',
    'zIndex': '-1',
  },
  mockup: {
    maxWidth: '90%',
    maxHeight: '100%',
  },
}));

export default MarketingPage;
