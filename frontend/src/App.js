import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {Hidden} from '@material-ui/core';
import {createMuiTheme, ThemeProvider, responsiveFontSizes} from '@material-ui/core/styles';

import MarketingPage from './pages/marketing';
import MobileMarketingPage from './pages/marketing-mobile';
/**
 * The top level component of the app.
 * @return {JSX} the JSX component
 */
function App() {
  const rtheme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={rtheme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Hidden xsDown>
              <MarketingPage/>
            </Hidden>
            <Hidden smUp>
              <MobileMarketingPage/>
            </Hidden>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

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
