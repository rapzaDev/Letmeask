import React from 'react';

import Image_Switch from '../Image&Switcher';

import { Container } from './styles';

type HeaderProps = {
    children?: React.ReactNode;
}

function Header({ children }:HeaderProps) {

    return(
        <Container>
            <div className="content">
                <Image_Switch />
                {children}
            </div>
        </Container>
    );
};

export default Header;