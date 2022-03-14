import React, { FormEvent, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

//HOOKS
import { useAuth } from '../../hooks/useAuth';
import { useRoom } from '../../hooks/useRoom';

//FIREBASE
import { ref, remove, update } from 'firebase/database';
import { database } from '../../services/firebase';

//ASSETS
import logoImg from '../../assets/images/logo.svg';
import deleteImg from '../../assets/images/delete.svg';

//COMPONENTS
import { DefaultButton } from '../../components/DefaultButton';
import { RoomCode } from '../../components/RoomCode';
import Question from '../../components/Question';

//STYLES
import './styles.scss';


type RoomParams = {
    id: string;
}


/**
 * @description 
 * Will Render the page for the user who has the respective codeID and wants
 * to use this room page to make some question.
 */
function AdminRoom() {
    
    let navigate = useNavigate();

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


    /**
     * @description
     * Update the data of the room in firebase with the prop endedAT.
     * If a room has this prop setted, it will not can be open again.
     * After this, sends the user to Home Page.
     */
    async function handleEndRoom() {

        const roomRef = ref( database, `rooms/${codeID}`);

        /** @description Date of the room was ended.*/
        const endedAt = new Date();

        await update( roomRef, { endedAt } );

        navigate('/');

    }



    /**
     * @description
     * If the user confirms the window modal, the current question will be deleted.
     * 
     * @param questionId unique key of each question question on firebase
     */
    async function handleDeleteQuestion( questionId: string) {
        
        if ( window.confirm('Tem certeza que você deseja excluir esta pergunta?') ) {

            const questionRef = ref( database, `rooms/${codeID}/questions/${questionId}` );

            await remove( questionRef );

        }

    }


    function renderQuestions() {

        return (

            questions.map(
                question => (

                    <Question 
                        key={question.id} 
                        content={question.content} 
                        author={question.author}
                    >
                        <button
                            type="button"
                            onClick={() => handleDeleteQuestion(question.id) }
                        >
                            <img src={deleteImg} alt="Remover pergunta" />
                        </button>
                    </Question>

                )
            )

        );

    }



    return(
        <div id="page-room">
            <header>

                <div className="content">
                    <img src={logoImg} alt="Letmeask" />
                    
                    <div>
                        <RoomCode code={codeID}/>

                        <DefaultButton 
                            className="close-room"
                            onClick={handleEndRoom}
                        >
                            Encerrar sala
                        </DefaultButton>
                    </div>

                </div>

            </header>

            <main className="main-content">

                <div className="room-title">
                    <h1>Sala {roomTitle}</h1>
                    { (questions.length > 0) && <span>{questions.length} pergunta(s)</span>}
                </div>


                <div className="questions-list">
                    { renderQuestions() }
                </div>

            </main>
        </div>
    );
};

export { AdminRoom };