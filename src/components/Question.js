import {React, useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom';

const Question = ({questNumber,
    score,
    questions,
    setScore,
    setQuestNumber,
    correctAns,
    shuffleChoices,
    setChoices,
    choices}) => {

    const [answer, setAnswer] = useState();
    const [incorrectAns, setIncorrectAns] = useState(false);
    const [submitAns, setSubmitAns] = useState(false);
    const navigate = useNavigate();

    useEffect( () => {
       questions?.[questNumber] && setChoices(shuffleChoices([questions[questNumber].correct_answer,
            ...questions[questNumber].incorrect_answers]))
             
    },[questNumber])

const checkAnswer = () => {

    if(correctAns === answer && !submitAns && answer) {
        setScore(score + 1);
        setSubmitAns(true);
    }else if(correctAns !== answer && answer) {
        setIncorrectAns(true)
        setSubmitAns(true)
    }
}

const nextQuestion = () => {
    if(submitAns){
    setAnswer("")
    setQuestNumber(questNumber + 1)
    setIncorrectAns(false)
    setSubmitAns(false)
    }
    console.log(questNumber)
    if(questNumber >= 9) {
        navigate('/result')
    }
}

    return(
        <div className="quest-container">
            <div className='quest-text-container'>
                <p className="question">{questions?.[questNumber].question}</p>
            </div>
            <div className="choices">
                {choices && choices.map( (choice) => ( 
                    <button 
                    disabled = {submitAns}
                    key={choice}
                    style = {choice === answer && !incorrectAns? {backgroundColor: "#34e710"}: 
                        {backgroundColor: 'white'} 
                        && choice === questions?.[questNumber].correct_answer && incorrectAns ?
                        {backgroundColor: 'red'} : {backgroundColor: 'white' } }  
                    className='button-30 choice'
                    onClick={(e) => setAnswer(e.target.innerText)}> {choice} </button>))
                }
            </div>
            <button 
            className='button-30 submit-ans'
            onClick={checkAnswer}>
                Submit
                </button>
                <button 
            className='button-30 submit-ans'
            onClick={nextQuestion}>
                Next
                </button>
        </div>
    )
}
export default Question;