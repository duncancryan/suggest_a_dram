import React from 'react';
import NavBar from './NavBar';
import ResultWrapper from './containers/ResultWrapper'
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { deepPurple, grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: grey[50],
      main: grey[800],
      dark: grey[900]
    },
    secondary: {
      main: deepPurple[500]
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

      <ResultWrapper />

    </ThemeProvider>

  );
}

export default App;
