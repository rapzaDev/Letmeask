import styled from 'styled-components';

export const PageRoomContainer = styled.div`
    header {

        padding: 1.5rem;
        border-bottom: 1px solid #e2e2e2;

        .content {
            width: 90vw;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;

            > img {
                max-height: 2,8125rem;
            }

            button {
                padding: 0;
                align-items: unset;

                &:hover {
                    filter: unset;
                }

            }

        }

    }

    main {
        width: 90vw;
        margin: 0 auto;
        padding-bottom: 3rem;

        .room-title {
            margin: 2rem 0 1.5rem;
            display: flex;
            align-items: center;

            h1 {
                font-family: 'Poppins', sans-serif;
                font-size: 1.5rem;
            }

            span {
                margin-left: 1rem;
                background: #e559f9;
                border-radius: 9999px;
                padding: 0.5rem 1rem;
                color: #fff;
                font-weight: 500;
                font-size: 0,875rem;
            }

        }

        form {

            textarea {
                width: 100%;
                border: 0;
                padding: 1rem;
                border-radius: 0.5rem;
                background: #fefefe;
                box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
                resize: vertical;
                min-height: 8.125rem;
            }

            .form-footer {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 1rem;

                .user-info {
                    display: flex;
                    align-items: center;

                    img {
                        width: 2rem;
                        height: 2rem;
                        border-radius: 50%;
                    }

                    span {
                        margin-left: 0.5rem;
                        color: var(--text-color);
                        
                        font-weight: 500;
                        font-size: 0.875rem;
                    }

                }

                .visitor {
                    span {
                        display: flex;
                        align-items: center;

                        font-size: 0.875rem;
                        color: #737380;
                        font-weight: 500;

                        button {
                            display: flex;
                            border: 0;

                            cursor: pointer;

                            background: transparent;
                            padding: 0;
                            padding-left: 3px;

                            color: var(--purple-color);
                            text-decoration: underline;
                            font-size: 0.875rem;
                            font-weight: 500;
                        
                            transition: filter 0.2s linear;
                            &:hover {
                                filter: brightness(0.7);
                            }
                        }

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
`;