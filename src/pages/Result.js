import {React} from 'react';
import {useNavigate} from 'react-router-dom';

const Result = ({name, score}) => {

    const navigate = useNavigate();

   const restartClick = () => {
    navigate('/')
   }
    return(
        <div className='result'>
            <h1>{name}</h1>
            <h2>Final Score : {score}</h2>
            <button className='button-30' onClick={restartClick}>
                Restart
            </button>
        </div>
    );
};

export default Result;

