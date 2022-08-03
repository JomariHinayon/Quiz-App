import {React, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Category from './../components/Category';
import Diff from './../components/Difficulty';
import Error from './../components/Error';

const Start = ({name,setName,fetchQuestions}) => {
    
    const [category, setCategory] = useState();
    const [diff, setDiff] = useState();
    const [errors, setErrors] = useState({
        errName: false,
        errCat: false,
        errDiff: false
    })
    
    const navigate = useNavigate();

    const handleSubmit = () => {
    
       !name ? setErrors( (err) => { return { ...err, errName: true}}) : 
       setErrors( (err) => { return {...err, errName: false}})  

       !category ? setErrors( (err) => { return {...err, errCat: true}}) : 
       setErrors( (err) => { return {...err, errCat: false}})  
        
       !diff ? setErrors( (err) => { return {...err, errDiff: true}}) : 
       setErrors( (err) => { return {...err, errDiff: false}})  

        if(name && category && diff) {
            fetchQuestions(category, diff);
            navigate('/quiz')
        }
    }
    return(
        <div className='start'>
            <div className='settings'>

                {/* Name Input */}
                <div className='field'>
                <input
                type="text" 
                className='name' 
                placeholder="Enter your name" 
                onChange={ name => setName(name.target.value)}
                />
                {errors.errName && <Error/>} 
                </div>

                {/* Category */}
                <div className='field'>
                <Category category={category} setCategory={setCategory} setValue/>
                {errors.errCat && <Error/>}
                </div>

                {/* Difficulty */}
                <div className='field'>
                <Diff diff={diff} setDiff={setDiff}/>
                {errors.errDiff && <Error/>}
                </div>

                {/* Start Button */}
                <button 
                className="button-30" 
                onClick={handleSubmit}>
                    Start
                </button>
            </div>
        </div>
    );
}

export default Start;
