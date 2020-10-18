import React from 'react';
import HomePage from './home-page/HomePage';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { teal, grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  spacing: 8,
  palette: {
    primary: {
      main: grey[900]
    },
    secondary: {
      main: teal[700]
    }
  },
});

function App() {
  return (
    <main className="main-container">

      <ThemeProvider theme={theme}>

        <HomePage />

      </ThemeProvider>

    </main>
  );
}

export default App;
