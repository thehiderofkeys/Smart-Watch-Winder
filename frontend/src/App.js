import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

import MarketingPage from './pages/marketing';
/**
 * The top level component of the app.
 * @return {JSX} the JSX component
 */
function App() {

  return (
    <ThemeProvider theme={theme}>
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
