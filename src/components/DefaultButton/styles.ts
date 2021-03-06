import styled from 'styled-components';

export const DefaultButtonComponent = styled.button`
    height: 50px;
    border-radius: 8px;
    font-weight: 500;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0 32px;

    cursor: pointer;
    border: 0;

    transition: filter 0.2s linear;

    &:not(:disabled):hover {
        filter: brightness(0.9);
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;