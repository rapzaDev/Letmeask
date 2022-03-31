import Switch from '../../components/Switcher';

import logoImg from '../../assets/images/logo.svg';
import logoDarkImg from '../../assets/images/logoDark.svg';

import { Container } from './styles';

function Image_Switch() {
    return(
        <Container className="image-and-switcher">
            <img className="light" src={logoImg} alt="Letmeask white theme logo" />
            <img className="dark" src={logoDarkImg} alt="Letmeask dark theme logo" />
            <Switch />
        </Container>
    );
};

export default Image_Switch;