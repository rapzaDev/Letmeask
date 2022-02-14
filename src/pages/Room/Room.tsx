import React, { FormEvent, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

import { ref, push, onValue } from 'firebase/database';
import { database } from '../../services/firebase';

import logoImg from '../../assets/images/logo.svg';

import { DefaultButton } from '../../components/DefaultButton/DefaultButton';
import { RoomCode } from '../../components/RoomCode/RoomCode';

import './styles.scss';


type RoomParams = {
    id: string;
}

type FirebaseQuestionsType = Record<string, { 
    author: {
        name: string,
        avatar: string
    },
    content: string,
    isHighlighted: boolean
    isAnswered: boolean,
}>

type FirebaseDataType = {
    authorId: string;
    questions: FirebaseQuestionsType;
    title: string;
}

type QuestionsType = {
    id: string,
    author: {
        name: string,
        avatar: string
    },
    content: string,
    isHighlighted: boolean
    isAnswered: boolean,
}

function Room() {
    
    const params = useParams<RoomParams>(); // using useParams to take the id room
    const codeID = params.id as string;

    const { user } = useAuth();

    // form elements states
    const [ newQuestion, setNewQuestion ] = useState('');
    
    // firebase data states
    const [ roomTitle, setRoomTitle ] = useState('');
    const [ questions, setQuestions ] = useState<QuestionsType[]>([]);

    useEffect(() => {
        const roomRef = ref(database, `rooms/${codeID}`);

        const unsubscribe = onValue( roomRef, (snapshot) => {
            const data: FirebaseDataType = snapshot.val();
            const { questions, title } = data;

            const parsedQuestions = Object.entries(questions)
                .map( ([ key, value ]) => {
                    return {
                        id: key,
                        content: value.content,
                        author: value.author,
                        isHighlighted: value.isHighlighted,
                        isAnswered: value.isAnswered
                    }
                });
            
            setRoomTitle(title);
            setQuestions(parsedQuestions);
        });

        return () => {
            unsubscribe();
        }

    }, [codeID]); /** everytime the codeID changes, for any reason, 
    the useEffect will execute the entire code again and get the new data for the new room. */ 


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

        // sending the new question to 'questions' label on the specify room.
        const roomRef = ref(database, `rooms/${codeID}/questions`); 

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
                    <h1>Sala {roomTitle}</h1>
                    { (questions.length > 0) && <span>{questions.length} pergunta(s)</span>}
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

                { JSON.stringify(questions) }
                
            </main>
        </div>
    );
};

export { Room };