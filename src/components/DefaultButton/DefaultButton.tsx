import React from 'react';

import './styles.scss';

interface DefaultButtonProps {
    children: React.ReactNode;
};

function DefaultButton ( { children }: DefaultButtonProps) {
    return (
        <button className="default-button">
            {children}
        </button>
    );
};

export { DefaultButton };