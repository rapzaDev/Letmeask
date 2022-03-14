import React, { FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';

//HOOKS
import { useAuth } from '../../hooks/useAuth';
import { useRoom } from '../../hooks/useRoom';

//FIREBASE
import { ref, push } from 'firebase/database';
import { database } from '../../services/firebase';

//ASSETS
import logoImg from '../../assets/images/logo.svg';

//COMPONENTS
import { DefaultButton } from '../../components/DefaultButton/DefaultButton';
import { RoomCode } from '../../components/RoomCode/RoomCode';
import Question from '../../components/Question';

//STYLES
import './styles.scss';


type RoomParams = {
    id: string;
}



function Room() {
    
    /**
     * @description using useParams this variable will take the id of the room.
     */
    const params = useParams<RoomParams>(); 

    /**
     *  @description Is the unique key of the room on firebase. 
     * */
    const codeID = params.id as string;

    //USER AUTHENTICATION HOOK
    const { user } = useAuth();

    //ROOM HOOK
    const { questions, roomTitle } = useRoom( codeID );

    // FORM STATES
    const [ newQuestion, setNewQuestion ] = useState('');
    


    /**
     * @description take the data of the question form and send it to
     * firebase database. After that, erases the data of textlabel field.
     */
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
            isHighlighted: false,
            isAnswered: false
        }

        const roomRef = ref(database, `rooms/${codeID}/questions`); 

        // sending the new question to 'questions' label on the specify room.
        await push(roomRef, question);

        // after sending the question to database, I erase it of textlabel field.
        setNewQuestion(''); 

    }


    /**
     * @description 
     * Render the user info bellow the textlabel of new question.
     * If the user is not authenticated, shows a link to authenticate.
     */
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


    function renderQuestions() {

        return (

            questions.map(
                question => (

                    <Question 
                        key={question.id} 
                        content={question.content} 
                        author={question.author}
                    />

                )
            )

        );

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

                <div className="questions-list">
                    { renderQuestions() }
                </div>

            </main>
        </div>
    );
};

export { Room };