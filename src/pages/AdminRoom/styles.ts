import styled from 'styled-components';

export const PageRoomContainer = styled.div`
    header {

        padding: 24px;
        border-bottom: 1px solid #e2e2e2;

        .content {
            max-width: 1120px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;

            > img {
                max-height: 45px;
            }

            button {
                padding: 0;
                align-items: unset;

                &:hover {
                    filter: unset;
                }

            }

            > div {
                display: flex;
                align-items: center;
                gap: 1rem;
                
                #default-button {
                    align-items: center;

                    padding: 0.625rem;

                    height: 2.5rem;
                    border: 1px solid var(--purple-color);

                    background-color: #fff;
                    color: var(--purple-color);
                    
                    font-size: 0.875rem;

                    transition: filter .2s linear;
                    &:hover {
                        filter: brightness(0.93);
                    }

                }

            }

        }

    }

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
                color: var(--text-color);
            }

            span {
                margin-left: 16px;
                background: #e559f9;
                border-radius: 9999px;
                padding: 8px 16px;
                color: #fff;
                font-weight: 500;
                font-size: 14px;
            }

        }

        form {

            textarea {
                width: 100%;
                border: 0;
                padding: 16px;
                border-radius: 8px;
                background: #fefefe;
                box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
                resize: vertical;
                min-height: 130px;
            }

            .form-footer {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 16px;

                .user-info {
                    display: flex;
                    align-items: center;

                    img {
                        width: 32px;
                        height: 32px;
                        border-radius: 50%;
                    }

                    span {
                        margin-left: 8px;
                        color: var(--text-color);
                        
                        font-weight: 500;
                        font-size: 14px;
                    }

                }

                > span {
                    display: flex;
                    align-items: center;

                    font-size: 14px;
                    color: #737380;
                    font-weight: 500;

                    button {
                        display: flex;

                        background: transparent;
                        padding: 0;
                        padding-left: 3px;

                        color: var(--purple-color);
                        text-decoration: underline;
                        font-size: 14px;
                        font-weight: 500;
                    }

                }

                button {
                    background: var(--purple-color);
                    color: #fff;

                    font-weight: 500;
                }

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

        background-color: #F5F5F5;
        border-radius: .5rem;
        box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.69);

        width: auto;
        height: 20rem;
        

        p {
            font-family: 'Poppins', sans-serif;
            font-size: 1.3rem;

            background-color: var(--purple-color);
            color: #fefefe;

            border-radius: .5rem;


            padding: 2rem 7rem;
            width: 35rem;

            text-align: center;
            text-transform: uppercase;

            margin-bottom: 2rem;
        }

        button {
            background-color: var(--purple-color);
            font-family: 'Poppins', sans-serif;
            color: #fefefe;
            width: 15rem;
        }

    }
`;