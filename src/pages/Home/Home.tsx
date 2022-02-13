import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

import { ref, get } from 'firebase/database';
import { database } from '../../services/firebase';

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';

import { DefaultButton } from '../../components/DefaultButton/DefaultButton';

import './styles.scss';

function Home() {
    let navigate = useNavigate();
    const { user, signInWithGoogle } = useAuth();

    const [ roomCode, setRoomCode ] = useState('');

    async function handleCreateRoom() {
        if ( !user ) {
           await signInWithGoogle();
        }

        navigate('/rooms/new');
    }

    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault();

        if ( roomCode.trim() === '' ) return;

        const roomRef = ref( database, `rooms/${roomCode}`); // catching the reference of the specified room.

        const firebaseRoomData = await get(roomRef); // getting the data of that room

        if ( !firebaseRoomData.exists() ) {
            alert('Room does not exists.');
            return;
        }

        navigate(`/rooms/${roomCode}`); 

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

                    <form onSubmit={handleJoinRoom} >
                        <input 
                            type="text" 
                            placeholder="Digite o código da sala"
                            onChange={ event => setRoomCode(event.target.value) }
                            value={roomCode}
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