import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { deepOrange, grey } from '@material-ui/core/colors';
import MainRouter from './router/MainRouter';

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

      <MainRouter />

    </ThemeProvider>

  );
}

export default App;
