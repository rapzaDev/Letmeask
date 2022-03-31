import React, { FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';

//HOOKS
import { useAuth } from '../../hooks/useAuth';
import { useRoom } from '../../hooks/useRoom';

//FIREBASE
import { ref, push, remove } from 'firebase/database';
import { database } from '../../services/firebase';

//ASSETS
import logoImg from '../../assets/images/logo.svg';

//COMPONENTS
import { DefaultButton } from '../../components/DefaultButton';
import { RoomCode } from '../../components/RoomCode';
import Question from '../../components/Question';
import Header from '../../components/Header';

//STYLES
import { PageRoomContainer } from './styles';


type RoomParams = {
    id: string;
}


/**
 * @description 
 * Will Render the page for the user who has the respective codeID and wants
 * to use this room page to make some question.
 */
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
    const { user, signInWithGoogle } = useAuth();

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
     * Gets the like reference on firebase database and pushes a new like on it. If
     * the user has already marked the like button, if he clicks again, will unmark the like.
     * 
     * @param questionId unique id of the question like
     * @param likeId id of the like inside the likes label on the current question.
     */
    async function handleLikeQuestion( questionId: string, likeId: string | undefined ) {
        

        if ( likeId ) {

            const likeRef = ref( database, `rooms/${codeID}/questions/${questionId}/likes/${likeId}` );

            await remove( likeRef );
            
        } else {

            const likesRef = ref( database, `rooms/${codeID}/questions/${questionId}/likes` );
            
            const newLike = { authorId: user?.id };

            await push( likesRef, newLike );

        }
            
    }

    async function handleCreateRoom() {
        await signInWithGoogle();
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
                    <img referrerPolicy="no-referrer" src={user.avatar} alt={user.name} />
                    <span>{user.name}</span>
                </div>
            );
        } else {
            return (
                <div className="visitor">
                    <span>Para enviar uma pergunta, <button onClick={handleCreateRoom}>faça seu login.</button></span> 
                </div>
            );
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
                        isAnswered={question.isAnswered}
                        isHighlighted={question.isHighlighted}
                    >
                        
                        { !question.isAnswered && (
                            <button 
                                className={ `like-button ${question.likeId ? 'liked' : ''}` }
                                type="button"
                                aria-label="Marcar como gostei"
                                onClick={() => handleLikeQuestion(question.id, question.likeId)}
                            >

                                { question.likeCount > 0 && <span>{question.likeCount}</span> }
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            
                            </button>
                        )}

                    </Question>

                )
            )

        );

    }

    return(
        <PageRoomContainer id="page-room">
            <Header>
                <RoomCode code={codeID}/>
            </Header>

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
        </PageRoomContainer>
    );
};

export { Room };