import { useEffect, useState } from "react";

//FIREBASE
import { ref, onValue } from 'firebase/database';
import { database } from '../services/firebase';


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

    /**
     * @description The admin sets if this question is been answered in that moment.
     *  */
    isHighlighted: boolean,
    
    isAnswered: boolean,
}


/**
 * @description Get the room data of firebase.
 * @returns The room title and all created questions data.
 */
export function useRoom( codeID: string ) {

    // FIREBASE STATES
    const [ roomTitle, setRoomTitle ] = useState('');
    const [ questions, setQuestions ] = useState<QuestionsType[]>([]);

    

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

    }, [codeID]);


    return { questions, roomTitle };

}