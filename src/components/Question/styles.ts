import styled from 'styled-components';

export const Container = styled.div`
    background-color: #fefefe;
    
    border-radius: 0.5rem;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);

    padding: 1.5rem;


    &.answered {

        background-color: #dbdcdd;

    }

    &.highlighted {

        background-color: #f4f0ff;
        border: 1px solid ${(props) => props.theme.colors.primary};

        footer .user-info span {
            color: ${(props) => props.theme.colors.text};
        }


    }


    & + .question {
        margin-top: .5rem;
    }


    p {
        color: ${(props) => props.theme.colors.text};
    }

    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-top: 1.5rem;

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
                color: ${(props) => props.theme.colors.primaryGrey};
                font-size: 14px;
            }

        }


        > div {

            display: flex;
            gap: 1rem;

        }
        

        button {
            border: 0;
            background-color: transparent;
            cursor: pointer;

            transition: filter .2s linear;

            &:hover {
                filter: brightness(0.7);
            }

            &.like-button {
                display: flex;
                align-items: flex-end;

                color: ${(props) => props.theme.colors.primaryGrey};

                gap: 0.5rem;


                &.liked {
                    color: ${(props) => props.theme.colors.primary};

                    svg path {
                        stroke: ${(props) => props.theme.colors.primary};
                    }

                }

            }

        }

    }
`;