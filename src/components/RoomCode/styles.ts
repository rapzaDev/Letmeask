import styled from 'styled-components';

export const RoomCodeButton = styled.button`
    display: flex;
    justify-content: space-between;

    height: 40px;
    overflow: hidden;

    background: #fff;
    border: 1px solid var(--purple-color);
    border-radius: 0.5rem;


    cursor: pointer;

    transition: transform 0.05s linear;

    &:hover {
        transform: scale(1.03);
    }

    div {
        display: flex;

        justify-content: center;
        align-items: center;

        padding: 0 12px;

        background-color: var(--purple-color);
    }

    span {
        display: block;
        align-self: center;
        flex: 1;
        padding: 0 16px 0 12px;

        width: 230px;
        font-size: 14px;
        font-weight: 500;
    }
`;