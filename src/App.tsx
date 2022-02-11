import React from 'react';

import { Router } from './routes';

import { AuthContextProvider } from './contexts/AuthContext';

function App() {

  return (
    <AuthContextProvider>
        <Router />
    </AuthContextProvider>
  );
}

export default App;
