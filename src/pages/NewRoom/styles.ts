import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: stretch;
    height: 100vh;
    width: 100vw;

    aside {
        flex: 7;

        background-color: var(--purple-color);
        color: #fff;

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

           color: var(--default-color);
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
                background: #fff;

                border: 1px solid var(--light-grey-color);
            }

            .submit-button {
                margin-top: 16px;

                background-color: var(--purple-color);
                color: #fff;
            }

            input, button {
                width: 100%;
            }

        }

        p {
            font-size: 0.87rem;

            color: var(--create-room-link-text-color);
            
            margin-top: 1rem;
            align-items: center;

            a {
                color: var(--link-color);
            }

        }

    }
`;