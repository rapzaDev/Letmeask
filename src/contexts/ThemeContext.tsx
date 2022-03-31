import React, { createContext, useCallback, useState } from 'react';

import { DefaultTheme } from 'styled-components';

import useTheme from '../hooks/useTheme';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

type ThemeContextType = {
    theme: DefaultTheme;
    toogleTheme: () => void;
}

type ThemeContextProviderProps = {
    children: React.ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextType);

function ThemeContextProvider({ children }: ThemeContextProviderProps) {
    const [theme, setTheme] = useTheme<DefaultTheme>(light);

    const toogleTheme = useCallback(() => {
      setTheme(theme.title === 'light' ? dark : light)
    }, [theme.title]);

    return(
        <ThemeContext.Provider value={{theme, toogleTheme}}>
            {children}
        </ThemeContext.Provider>
    );

}

export { ThemeContextProvider };