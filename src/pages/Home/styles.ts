import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: stretch;
    height: 100vh;

    aside {
        flex: 7;

        background-color: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.asideText};

        display: flex;
        flex-direction: column;
        justify-content: center;

        padding: 7.5rem 5rem;

        img {
            max-width: 320px;
        }

        strong {
            font: 700 36px 'Poppins', sans-serif;
            line-height: 42px;

            margin-top: 16px;
        }

        p {
           font-size: 24px;
           line-height: 32px;
           
           margin-top: 16px;

           color: ${(props) => props.theme.colors.background};
        }

    }

    main {
        flex: 8;

        padding: 0 32px;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .main-content {
        display: flex;
        flex-direction: column;

        width: 100%;
        max-width: 320px;

        align-items: stretch;
        text-align: center;

        > img {
            align-self: center;
        }

        .google-button {
            margin-top: 64px;
    
            background: ${(props) => props.theme.colors.googleButton};
            color: ${(props) => props.theme.colors.white};
    
            img {
                margin-right: 8px;
            }
    
        }

        form {

            input {
                height: 50px;
                border-radius: 8px;

                padding: 0 16px;
                background: ${(props) => props.theme.colors.formBackground};

                border: 1px solid ${(props) => props.theme.colors.secundaryGrey};
            }

            .submit-button {
                margin-top: 16px;

                background-color: ${(props) => props.theme.colors.primary};
                color: ${(props) => props.theme.colors.white};
            }

            input, button {
                width: 100%;
            }

        }

    }

    .separator {
        font-size: 14px;
        color: ${(props) => props.theme.colors.secundaryGrey};

        margin: 32px 0;
        display: flex;
        align-items: center;

        &::before {
            content: '';
            flex: 1; //to ocuppy a flexible size
            height: 1px;
            background-color: ${(props) => props.theme.colors.secundaryGrey};
            margin-right: 16px;
        }

        &::after {
            content: '';
            flex: 1; //to ocuppy a flexible size
            height: 1px;
            background-color: ${(props) => props.theme.colors.secundaryGrey};
            margin-left: 16px;
        }

    }
`;