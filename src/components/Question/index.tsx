import React from 'react';

import { Container } from './styles';

type QuestionProps = {
    content: string;
    author: {
        name: string;
        avatar: string;
    };
    children?: React.ReactNode;
    isAnswered?: boolean; 
    isHighlighted?: boolean;
}

function Question({ 
    content, 
    author, 
    isAnswered = false, 
    isHighlighted = false, 
    children 
}: QuestionProps ) {

    return(

        <Container 
            className={`question ${isAnswered ? 'answered' : ''} ${ (isHighlighted  && !isAnswered) ? 'highlighted' : ''} `}
        >
            <p>{content}</p>

            <footer>
                
                <div className="user-info">
                    <img referrerPolicy="no-referrer" src={author.avatar} alt={author.name} />
                    <span>{author.name}</span>
                </div>

                <div>{children}</div>

            </footer>

        </Container>

    );

};

export default Question;