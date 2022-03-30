import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: stretch;
    height: 100vh;
    width: 100vw;

    aside {
        flex: 7;

        background-color: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.asideText};

        display: flex;
        flex-direction: column;
        justify-content: center;

        padding: 120px 80px;

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

        h2 {
            margin-top: 3.5rem;
            margin-bottom: 1.5rem;

            font-size: 1.5rem;

            font-family: 'Poppins', sans-serif;
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

        p {
            font-size: 0.87rem;

            color: ${(props) => props.theme.colors.primaryGrey};
            
            margin-top: 1rem;
            align-items: center;

            a {
                color: ${(props) => props.theme.colors.secundary};
            }

        }

    }
`;