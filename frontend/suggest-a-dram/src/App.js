import React from 'react';
import HomePage from './home-page/HomePage';
import NavBar from './NavBar';
import QuizContainer from './containers/QuizContainer';
import QuestionContainer from './containers/QuestionContainer';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { deepOrange, grey } from '@material-ui/core/colors';
import ResultWrapper from './containers/ResultWrapper';

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

      <ResultWrapper whiskies={[{"_id":{"$oid":"5f8c61612f77cb049a5184d6"},"meta-data":{"pagemd":{"page-title":"Aberfeldy 12 Year Old Scotch Whisky : The Whisky Exchange","page-description":"A fruity, clean and polished malt with a touch of honey and spice, Aberfeldy 12 Year Old is an excellent introduction to this Highland distillery. Aberfeldy's main claim to fame is as the heart of ...","product-image":"https://img.thewhiskyexchange.com/540/abfob.12yov1.jpg","product-url":"https://www.thewhiskyexchange.com/p/5850/aberfeldy-12-year-old"},"name":"Aberfeldy 12 Year Old","age":"12","price":"£37.95"},"attributes":{"rating":"4.5","body":"3","richness":"3","smoke":"0","sweetness":"3","character":["Nutmeg","Apple","Melon","Honey "],"score":13}}]} />

    </ThemeProvider>

  );
}

export default App;
