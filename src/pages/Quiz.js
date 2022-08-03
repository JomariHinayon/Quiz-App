import {React, useEffect, useState} from 'react';
import Question from './../components/Question'

const Quiz = ({name, questions, setQuestions, score, setScore}) => {
    const [choices, setChoices] = useState();
    const [questNumber, setQuestNumber] = useState(0);
    
    useEffect( () => {
       
        questions?.[questNumber] && setChoices(shuffleChoices([questions[questNumber].correct_answer,
                                            ...questions[questNumber].incorrect_answers]))
            
    }, [questions]);

    const shuffleChoices = (questChoices) => {
        
        return questChoices.sort( () => 0.5 - Math.random())
    }

    return(
        <div className='quiz'>
            <div className='quiz-title'>
                <h1>Welcome, {name}!</h1>
                <h4>Category: {questions?.[questNumber].category}</h4>
                <h4>Score: {score}</h4>
            </div>
            <Question
            questNumber = {questNumber}
            setQuestions = {setQuestions}
            score = {score}
            questions = {questions}
            setScore = {setScore}
            setQuestNumber = {setQuestNumber}
            correctAns = {questions?.[questNumber].correct_answer}
            choices = {choices}
            setChoices = {setChoices}
            shuffleChoices = {shuffleChoices}
           />
        </div>
    );
}

export default Quiz;