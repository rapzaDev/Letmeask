import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ThemeContextProvider } from './contexts/ThemeContext';

import './services/firebase';

import './styles/responsive.scss';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

