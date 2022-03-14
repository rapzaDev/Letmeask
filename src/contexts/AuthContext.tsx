import React, { createContext, useEffect, useState } from 'react';

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../services/firebase';

type User = {
    id: string;
    name: string;
    avatar: string;
}
  
type AuthContextType = {
    user: User | undefined;
    signInWithGoogle: () => Promise<void>;
}

type AuthContextProviderProps = {
    children: React.ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

function AuthContextProvider ( { children }: AuthContextProviderProps ) {

    const [ user, setUser ] = useState<User>();

    useEffect(() => {
        
        const unsubscribe = auth.onAuthStateChanged( user => { // detects if an user is already logged in the application
        if ( user ) {
            const { displayName, photoURL, uid } = user;

            if ( !displayName || !photoURL ) {
            throw new Error('Missing user information from Google Account');
            }

            setUser({
                id: uid,
                name: displayName,
                avatar: photoURL
            });

        }
        });

        return () => {
            unsubscribe(); // best practices
        }

    }, []);

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
            });

        }

    };

    return (
        <AuthContext.Provider value={{ user, signInWithGoogle }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContextProvider };