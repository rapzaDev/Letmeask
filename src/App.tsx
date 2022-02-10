import React, { createContext, useState } from 'react';

import { Router } from './routes';

export const AuthContext = createContext({} as any);

function App() {
  const [ user, setUser ] = useState();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
        <Router />
    </AuthContext.Provider>
  );
}

export default App;
