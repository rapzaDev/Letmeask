import React from 'react';

//STYLES
import './styles.scss';

type QuestionProps = {
    content: string;
    author: {
        name: string;
        avatar: string;
    };
    children?: React.ReactNode;
}

function Question( { content, author, children }: QuestionProps ) {

    return(

        <div className="question">
            <p>{content}</p>

            <footer>
                
                <div className="user-info">
                    <img referrerPolicy="no-referrer" src={author.avatar} alt={author.name} />
                    <span>{author.name}</span>
                </div>

                <div>{children}</div>

            </footer>

        </div>

    );

};

export default Question;