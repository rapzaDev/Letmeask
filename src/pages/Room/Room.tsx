import React, { FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

import { ref, push } from 'firebase/database';
import { database } from '../../services/firebase';

import logoImg from '../../assets/images/logo.svg';

import { DefaultButton } from '../../components/DefaultButton/DefaultButton';
import { RoomCode } from '../../components/RoomCode/RoomCode';

import './styles.scss';

type RoomParams = {
    id: string;
}

function Room() {
    
    const params = useParams<RoomParams>(); // using useParams to take the id room
    const codeID = params.id as string;

    const { user } = useAuth();

    const [ newQuestion, setNewQuestion ] = useState('');


    async function handleSendQuestion(event: FormEvent) {
        event.preventDefault();

        if ( newQuestion.trim() === '' ) return;

        if ( !user ) {
            throw new Error('You must be logged in'); // more ahead i'll change to a toast message.
        }

        const question = {
            content: newQuestion,
            author: {
                name: user.name,
                avatar: user.avatar,
            },
            isHighlighted: false, // is the prop who the admin sets if this question is been answered in that moment.
            isAnswered: false
        }

        const roomRef = ref(database, `rooms/${codeID}/questions`); // creating the questions label on the specify room.

        await push(roomRef, question);

        setNewQuestion(''); // after sending the question to database, I erase it of textlabel field.

    }

    function renderUserInfo() {
    
        if ( user ) {
            return (
                <div className="user-info">
                    <img src={user.avatar} alt={user.name} />
                    <span>{user.name}</span>
                </div>
            );
        } else return <span>Para enviar uma pergunta, <button>faça seu login.</button></span> ;
    
    }

    return(
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask" />
                    <RoomCode code={codeID}/>
                </div>
            </header>

            <main className="main-content">
                <div className="room-title">
                    <h1>Sala React</h1>
                    <span>4 perguntas</span>
                </div>

                <form  onSubmit={handleSendQuestion}>
                    <textarea 
                        placeholder="Escreva sua pergunta aqui."
                        onChange={ event => setNewQuestion(event.target.value) }
                        value={newQuestion}
                    />
                    <div className="form-footer">
                        { renderUserInfo() }
                        <DefaultButton 
                            type="submit"
                            disabled={!user}
                        >
                            Enviar pergunta
                        </DefaultButton>
                    </div>
                </form>
            </main>
        </div>
    );
};

export { Room };