import styled, { css } from 'styled-components';
import logoImg from '../../assets/images/logo.svg';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;

    gap: 1.5rem;

    width: fit-content;
        
    ${(props) => props.theme.title === 'light' 
        ? css` .dark { display: none; }`
        : css` .light { display: none; }`
    }
`;