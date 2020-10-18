import React from 'react';
import NavBar from './NavBar';
import ResultWrapper from './containers/ResultWrapper'
import { createMuiTheme, Divider, Grid, ThemeProvider, Typography } from '@material-ui/core';
import { deepPurple, grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  spacing: 8,
  palette: {
    primary: {
      main: grey[900]
    },
    secondary: {
      main: deepPurple[500]
    }
  },
});

function App() {
  return (

    <ThemeProvider theme={theme}>

      <NavBar />

      <main>

        <Typography variant="h1">
          All Whiskies
        </Typography>

        <ResultWrapper />

      </main>

    </ThemeProvider>

  );
}

export default App;
