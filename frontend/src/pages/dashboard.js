import React from 'react';

import {Container, Grid, Typography, makeStyles, Hidden} from '@material-ui/core';

import {ReactComponent as WordMark} from '../images/WordMark.svg';
import {ReactComponent as WordMarkLeft} from '../images/SplitWordMarkLeft.svg';
import {ReactComponent as WordMarkRight} from '../images/SplitWordMarkRight.svg';

import WinderCard from '../component/winder-card'

/**
 * @return {JSX} JSX element for the marketing page.
 */
function Dashboard() {
  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={3} alignItems="top" className={classes.container}>
        <Grid item xs={12} sm={3}>
          <Hidden xsDown>
            <WordMark fill='white' className={classes.wordMark}/>
          </Hidden>
          <Hidden smUp>
            <WordMarkLeft fill='white' className={classes.wordMark}/>
            <WordMarkRight fill='black' className={classes.wordMark}/>
          </Hidden>
          <div className={classes.wordMarkBackground}/>
        </Grid>
        <Grid item xs={12} sm={9} >
            <Hidden xsDown>
              <Typography variant='h3'>Your Winders </Typography>
            </Hidden>
            <Hidden smUp>
                <Typography className={classes.contrastingText} variant='h3'>Winders </Typography>
            </Hidden>
            <WinderCard/>
            <WinderCard/>
        </Grid>
      </Grid>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up('sm')]:{
      marginTop: '100px',
    },
    [theme.breakpoints.down('xs')]:{
      marginTop: '50px',
    },
  },
  wordMark: {
    [theme.breakpoints.down('xs')]:{
      width: '50%',
    },
    [theme.breakpoints.up('sm')]:{
      maxWidth: '100%',
    }
  },
  wordMarkBackground: {
    [theme.breakpoints.up('sm')]:{
      width: 'calc(50vw - 310px)',
      minWidth: 'calc(24.5vw + 16px)',
    },
    [theme.breakpoints.down('xs')]:{
      width: '50vw',
    },
    position: 'fixed',
    top: '0',
    left: '0',
    bottom: '0',
    background: '#246ce9',
    zIndex: '-1',
  },
  contrastingText: {
    color: 'white',
  },
}));

export default Dashboard;
