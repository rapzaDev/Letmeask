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
                    
                    <div>
                        <RoomCode code={codeID}/>

                        <DefaultButton className="close-room">
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