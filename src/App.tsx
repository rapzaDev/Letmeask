import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import { Router } from './routes';

import { AuthContextProvider } from './contexts/AuthContext';
import { ThemeContext } from './contexts/ThemeContext';

import GlobalStyle from './styles/global';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <AuthContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>  
    </AuthContextProvider>
  );
}

export default App;
