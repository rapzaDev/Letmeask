import React from 'react';
import { useNavigate } from 'react-router-dom';

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';

import './styles.scss';
import { DefaultButton } from '../../components/DefaultButton/DefaultButton';

function Home() {
    let navigate = useNavigate();

    function navigateToNewRoom() {
        navigate('/rooms/new');
    }

    return(
        <div id="page-auth" >

            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real</p>
            </aside>

            <main>
                <div className="main-content">

                    <img src={logoImg} alt="Letmeask logo" />

                    <DefaultButton 
                        className="google-button"
                        onClick={navigateToNewRoom}
                    >
                        <img src={googleIconImg} alt="Google icon" />
                        Crie sua sala com o Google
                    </DefaultButton>
                    
                    <div className="separator">ou entre em uma sala</div>

                    <form>
                        <input 
                            type="text" 
                            placeholder="Digite o código da sala"
                        />
                        <DefaultButton 
                            type="submit"
                            className="submit-button"
                        >
                            Entrar na sala
                        </DefaultButton>
                    </form>
                </div>
            </main>
        </div>
    );
}

export { Home };