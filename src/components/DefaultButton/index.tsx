import React, { ButtonHTMLAttributes } from 'react';

import './styles.scss';

type DefaultButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

function DefaultButton ( { children, ...rest }: DefaultButtonProps) {
    return (
        <button id="default-button" {...rest} >
            {children}
        </button>
    );
};

export { DefaultButton };