import React from 'react';

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';

import './styles.scss';
import { DefaultButton } from '../../components/DefaultButton/DefaultButton';

function NewRoom() {
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

                    <h2>Crie uma nova sala</h2>

                    <form>
                        <input 
                            type="text" 
                            placeholder="Nome da sala"
                        />
                        <DefaultButton 
                            type="submit"
                            className="submit-button"
                        >
                            Criar sala
                        </DefaultButton>
                    </form>

                    <p>
                        Quer entrar em uma sala já existente?
                        <a href="#"> Clique aqui</a>
                    </p>

                </div>
            </main>
        </div>
    );
}

export { NewRoom };