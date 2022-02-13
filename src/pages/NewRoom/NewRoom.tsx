import React, { useContext, FormEvent , useState} from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

import { database } from '../../services/firebase';
import { ref, set } from 'firebase/database';

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';

import { DefaultButton } from '../../components/DefaultButton/DefaultButton';

import './styles.scss';


function NewRoom() {

    const [ newRoom, setNewRoom ] = useState('');

    const { user } = useAuth();

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault();

        if ( newRoom.trim() === '' ) return;

        const roomRef = ref(database, 'rooms');

        set( roomRef, {
            title: newRoom,
            authorId: user?.id,
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

                    <h2>Crie uma nova sala</h2>

                    <form onSubmit={handleCreateRoom} >
                        <input 
                            type="text" 
                            placeholder="Nome da sala"
                            onChange={ event => setNewRoom(event.target.value) }
                            value={newRoom}
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
                        <Link to="/"> Clique aqui</Link>
                    </p>

                </div>
            </main>
        </div>
    );
}

export { NewRoom };