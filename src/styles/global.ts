import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;

        box-sizing: border-box;

        --default-color: #f8f8f8;
        --text-color: #29292e;

        --purple-color: #835afd;
        --google-button-color: #ea4335;
        --light-grey-color: #a8a8b3;

        --create-room-link-text-color: #737380;
        --link-color: #e55ef9;
    }

    body {
        background-color: var(--default-color);
        color: var(--text-color);
    }

    body, input, button, textarea {
        font: 400 16px 'Roboto', sans-serif;
    }
`;