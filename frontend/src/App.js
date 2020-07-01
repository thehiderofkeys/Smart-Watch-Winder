import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {AppBar, Toolbar, Typography, makeStyles} from '@material-ui/core';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

import MarketingPage from './pages/marketing';
/**
 * The top level component of the app.
 * @return {JSX} the JSX component
 */
function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <AppBar color="transparent" elevation={0}>
        <Toolbar>
          <Typography className={classes.logo}>Power Reserve</Typography>
        </Toolbar>
      </AppBar>
      <Router>
        <Switch>
          <Route exact path="/">
            <MarketingPage/>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

const useStyles = makeStyles((theme) => ({
  logo: {
    fill: 'white',
    color: 'white',
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#246ce9',
    },
    secondary: {
      main: '#e9a124',
    },
  },
});

export default App;
