import styled from 'styled-components';

export const Container = styled.header`
    padding: 1.5rem;
    border-bottom: 1px solid ${(props) => props.theme.colors.headerBorder};

    .content {
        max-width: 70rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .image-and-switcher {
            > img {
                max-height: 2.8125rem;
            }
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
                border: 1px solid ${(props) => props.theme.colors.primary};

                background-color: ${(props) => props.theme.colors.roomCodeBackground};
                color: ${(props) => props.theme.title === 'light' ? props.theme.colors.primary : props.theme.colors.white};
                
                font-size: 0.875rem;

                transition: filter .2s linear;
                &:hover {
                    filter: brightness(0.93);
                }

            }

        }

    }

`;