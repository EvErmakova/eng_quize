import React from 'react';
import Quizes from '../mocks/quizes';
import { useParams } from 'react-router-dom';

function QuizScreen() {
    const {quizId} = useParams();
    const quiz = Quizes.find(item => item.id === quizId);

    return (
        <>
            {quiz && (
                <>
                    <h1 className="text-4xl font-extrabold mb-4">{quiz.title}</h1>
                    <div>{quiz.description}</div>
                    <div>Level: {quiz.level}</div>
                </>
            )}
        </>
    );
}

export default QuizScreen;
