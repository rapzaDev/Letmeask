import React from 'react';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';

import { Router } from './routes';

import { AuthContextProvider } from './contexts/AuthContext';

import GlobalStyle from './styles/global';

function App() {

  return (
    <AuthContextProvider>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>  
    </AuthContextProvider>
  );
}

export default App;
