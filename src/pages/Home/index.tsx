import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//CONTEXT
import { useAuth } from '../../hooks/useAuth';

//FIREBASE
import { ref, get } from 'firebase/database';
import { database } from '../../services/firebase';

//ASSETS
import illustrationImg from '../../assets/images/illustration.svg';
// import logoImg from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';

//COMPONENTS
import { DefaultButton } from '../../components/DefaultButton';
import Image_Switch from '../../components/Image&Switcher';

//STYLES
import { Container } from './styles';



function Home() {
    let navigate = useNavigate();

    const { user, signInWithGoogle } = useAuth();

    const [ roomCode, setRoomCode ] = useState('');

    /**
     * @description If the user is not authenticated, the google pop-up will appear and the user will 
     * authenticate with his google account. If the user is already authenticate, he will be redirected 
     * to NewRoom page. 
     * */
    async function handleCreateRoom() {
        if ( !user ) {
           await signInWithGoogle();
        }

        navigate('/rooms/new');
    }


    /**
     * @description searches for a room on firebase database with the room code passed. 
     * If the room exists, the user will be redirected to this specific Room Page, if not,
     * nothing happens. Also, if the room has a endedAt property setted, this means
     * this room is already closed and the user cannot enter on it anymore.
     */
    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault();

        if ( roomCode.trim() === '' ) return;

        /**
         * @description Catches the reference of the specified room with his room Code and search for it on
         * firebase database. */
        const roomRef = ref( database, `rooms/${roomCode}`); 

        /**
         * @description If the reference of the room exists, this will get the data of that room.
         * 
         * @var roomRef: reference of room on database of firebase.
         */
        const firebaseRoomData = await get(roomRef); 

        if ( !firebaseRoomData.exists() ) {
            alert('Room does not exists.');
            return;
        }

        // if endedAt exists, the room is closed.
        if ( firebaseRoomData.val().endedAt ) {
            alert('Room already closed.');
            return;
        }

        if ( firebaseRoomData.val().authorId === user?.id ) navigate(`/admin/rooms/${roomCode}`); 
        else navigate(`/rooms/${roomCode}`); 

    }

    return(
        <Container id="page-auth" >

            <aside>
                <img src={illustrationImg} alt="Ilustra????o simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as d??vidas da sua audi??ncia em tempo real</p>
            </aside>

            <main>
                <div className="main-content">
                    <Image_Switch />

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
                            placeholder="Digite o c??digo da sala"
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
        </Container>
    );
}

export { Home };