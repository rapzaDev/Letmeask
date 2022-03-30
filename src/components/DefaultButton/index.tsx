import React, { ButtonHTMLAttributes } from 'react';

import { DefaultButtonComponent } from './styles';

type DefaultButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

function DefaultButton ({ children, ...rest }: DefaultButtonProps) {
    return (
        <DefaultButtonComponent id="default-button" {...rest} >
            {children}
        </DefaultButtonComponent>
    );
};

export { DefaultButton };