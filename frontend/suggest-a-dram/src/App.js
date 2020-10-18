import React from 'react';
import HomePage from './home-page/HomePage';
import NavBar from './NavBar';
import ResultWrapper from './containers/ResultWrapper'
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { deepOrange, grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900]
    },
    secondary: {
      main: deepOrange[800]
    },
    background: {
      paper: grey[700]
    },
    text: {
      primary: '#fafafa'
    }
  }
});

function App() {
  return (

    <ThemeProvider theme={theme}>

      <NavBar />

      <HomePage />

    </ThemeProvider>

  );
}

export default App;
