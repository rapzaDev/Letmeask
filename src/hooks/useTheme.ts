import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { DefaultTheme } from 'styled-components';

type Response<T> = [
    T,
    Dispatch<SetStateAction<T>>,
]

function useTheme<T>(initialTheme: DefaultTheme): Response<T> {
    const [theme, setTheme] = useState(() => {
        const storagedTheme = localStorage.getItem('@letmeask/theme');

        if (storagedTheme) {
            return JSON.parse(storagedTheme);
        }
        else {
            return initialTheme;
        }
    });

    useEffect(() => {
        localStorage.setItem('@letmeask/theme', JSON.stringify(theme));
    }, [theme]);

    return [theme, setTheme];
};

export default useTheme;