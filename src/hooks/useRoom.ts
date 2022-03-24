import { useEffect, useState } from "react";

//HOOKS
import { useAuth } from "./useAuth";

//FIREBASE
import { ref, onValue, get } from 'firebase/database';
import { database } from '../services/firebase';


type FirebaseQuestionsType = Record<string, { 
    author: {
        name: string,
        avatar: string
    },
    content: string,
    isHighlighted: boolean
    isAnswered: boolean,
    likes: Record<string, {
        authorId: string;
    }>;
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

    /**
     * @description The admin sets if this question is been answered in that moment.
     *  */
    isHighlighted: boolean,
    
    isAnswered: boolean,
    likeCount: number,
    likeId: string | undefined,

}


/**
 * @description Get the room data of firebase.
 * @returns The room title and all created questions data.
 */
export function useRoom( codeID: string ) {

    //HOOKS
    const { user } = useAuth();

    // FIREBASE STATES
    const [ roomTitle, setRoomTitle ] = useState('');
    const [ questions, setQuestions ] = useState<QuestionsType[]>([]);
    const [ isAdmin, setIsAdmin ] = useState(false);
    

    /**
     * @description Keep tracking the data on firebase and every time that data changes
     * the useEffect will update the interface data.
     * Also if the codeID changes, for any reason, 
     * the useEffect will execute the entire code again and get the 
     * new data for the new room.
     */
    useEffect(() => {
        const roomRef = ref(database, `rooms/${codeID}`);

        const unsubscribe = onValue( roomRef, (snapshot) => {
            const data: FirebaseDataType = snapshot.val();
            const { questions, title } = data;

            const parsedQuestions = Object.entries(questions)
                .map<QuestionsType>( ([ key, value ]) => {
                    return {
                        id: key,
                        content: value.content,
                        author: value.author,
                        isHighlighted: value.isHighlighted,
                        isAnswered: value.isAnswered,
                        likeCount: Object.values(value.likes ?? {}).length,
                        likeId: Object.entries(value.likes ?? {}).find( ( [key, like] ) => like.authorId === user?.id )?.[0],
                    }
                });
            
            setRoomTitle(title);
            setQuestions(parsedQuestions);
        });


        async function checkIfUserIsAdmin() {
            const firebaseRoomData = await get(roomRef); 

            if (  firebaseRoomData.val().authorId === user?.id ) setIsAdmin(true);

        }

        checkIfUserIsAdmin();

        return () => {
            unsubscribe();
        }

    }, [ codeID, user?.id ]);

    console.log(isAdmin);


    return { questions, roomTitle, isAdmin };

}