import React from 'react';
import { ThemeProvider } from 'styled-components';
import  'bootstrap/dist/css/bootstrap.min.css' ;

import theme from './assets/styles/theme'
import {GlobalStyle} from './assets/styles/global'
import logo from './assets/imgs/logoGitStar.svg';

import {Layout, Loading} from './components'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Layout>
        
      </Layout>
    </ThemeProvider>
  );
}

export default App;
