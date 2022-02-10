import React from 'react';
import { useNavigate } from 'react-router-dom';

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../services/firebase';

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';

import { DefaultButton } from '../../components/DefaultButton/DefaultButton';

import './styles.scss';

function Home() {
    let navigate = useNavigate();

    function handleCreateRoom() {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider).then( ( result ) => {
            console.log(result);

            navigate('/rooms/new');
        });

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
                        onClick={handleCreateRoom}
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