import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            secundary: string;

            answered: string;
            highlighted: string;

            googleButton: string;
            
            primaryGrey: string;
            secundaryGrey: string;

            headerBorder: string;
            numberQuestions: string;
            authorization: string;
            white: string;
            
            background: string;
            roomCodeBackground: string;
            authorizationBackground: string;
            formBackground: string;

            text: string;
            asideText: string;
        }
    }
}