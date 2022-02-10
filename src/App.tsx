import React, { createContext, useState } from 'react';

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './services/firebase';

import { Router } from './routes';

type User = {
  id: string;
  name: string;
  avatar: string;
}

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextType);

function App() {
  const [ user, setUser ] = useState<User>();

  async function signInWithGoogle () {
    const provider = new GoogleAuthProvider();

    const result = await signInWithPopup(auth, provider)
    
    if (result.user) {

      const { displayName, photoURL, uid } = result.user;

      if ( !displayName || !photoURL ) {
        throw new Error('Missing user information from Google Account');
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      })

    }

  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
        <Router />
    </AuthContext.Provider>
  );
}

export default App;
