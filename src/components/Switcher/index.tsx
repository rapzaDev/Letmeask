import { useContext } from 'react';
import Switch from 'react-switch';
import { shade } from 'polished';

import { ThemeContext } from '../../contexts/ThemeContext';

import { ThemeContext as ColorsContext } from 'styled-components';

function Switcher() {
    const { colors, title } = useContext(ColorsContext); 

    const { toogleTheme } = useContext(ThemeContext);

    return(
        <Switch 
            onChange={toogleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={15}
            offColor={shade(0.4, colors.secundary)}
            onColor={colors.primary}
            onHandleColor={colors.secundary}
            offHandleColor={colors.secundary}
        />
    );
};

export default Switcher;