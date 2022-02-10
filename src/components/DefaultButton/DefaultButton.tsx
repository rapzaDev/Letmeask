import React, { ButtonHTMLAttributes } from 'react';

import './styles.scss';

type DefaultButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

function DefaultButton ( { children, ...rest }: DefaultButtonProps) {
    return (
        <button {...rest} >
            {children}
        </button>
    );
};

export { DefaultButton };