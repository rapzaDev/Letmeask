import styled from 'styled-components';

export const PageRoomContainer = styled.div`
    main {
        max-width: 800px;
        margin: 0 auto;

        .room-title {
            margin: 32px 0 24px;
            display: flex;
            align-items: center;

            h1 {
                font-family: 'Poppins', sans-serif;
                font-size: 24px;
                color: ${(props) => props.theme.colors.text};
            }

            span {
                margin-left: 16px;
                background: ${(props) => props.theme.colors.secundary};
                border-radius: 9999px;
                padding: 8px 16px;
                color: ${(props) => props.theme.colors.numberQuestions};
                font-weight: 500;
                font-size: 14px;
            }

        }
        
        .questions-list {
            margin-top: 2rem;
        }
    }


    .authorization-message {
        max-width: 800px;
        margin: 0 auto;
        
        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: center;

        padding: 0 2rem;
        margin-top: 7rem;

        background-color: ${(props) => props.theme.colors.authorizationBackground};
        border-radius: .5rem;
        box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.69);

        width: auto;
        height: 20rem;
        

        p {
            font-family: 'Poppins', sans-serif;
            font-size: 1.3rem;

            background-color: ${(props) => props.theme.colors.primary};
            color: ${(props) => props.theme.colors.authorization};

            border-radius: .5rem;


            padding: 2rem 7rem;
            width: 35rem;

            text-align: center;
            text-transform: uppercase;

            margin-bottom: 2rem;
        }

        button {
            background-color: ${(props) => props.theme.colors.primary};
            font-family: 'Poppins', sans-serif;
            color: ${(props) => props.theme.colors.authorization};
            width: 15rem;
        }

    }
`;