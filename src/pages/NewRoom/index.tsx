import React, { FormEvent , useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

//CONTEXT
import { useAuth } from '../../hooks/useAuth';

//FIREBASE
import { database } from '../../services/firebase';
import { ref, set, push } from 'firebase/database';

//ASSETS
import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';

//COMPONENTS
import { DefaultButton } from '../../components/DefaultButton';
import Image_Switch from '../../components/Image&Switcher';

//STYLES
import { Container } from './styles';



function NewRoom() {

    let navigate = useNavigate();

    const [ newRoom, setNewRoom ] = useState('');

    const { user } = useAuth();

    /** 
     * @description Creates a new room with the title choosen on form
     * and his owner identification ( the user id value
     * of his google account), and redirects the user for this recently created Room Page
     * with the admin view.  
     */
    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault();

        if ( newRoom.trim() === '' ) return;

        const roomRef = ref(database, 'rooms');

        /**
         * @description push data to the 'rooms' category on database to create a new room. After that,
         * returns the unique key of the new room.
         * 
         * @var title: the name of the room
         * @var authorId: the name of the authenticated user on google account who's created the new room.
         */
        const firebaseRoom = push( roomRef, { 
            title: newRoom,
            authorId: user?.id,
        });

        navigate(`/admin/rooms/${firebaseRoom.key}`); 

    }

    return(
        <Container id="page-auth" >

            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real</p>
            </aside>

            <main>
                <div className="main-content">

                    <Image_Switch />

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
        </Container>
    );
}

export { NewRoom };