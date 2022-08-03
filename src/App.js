import axios from 'axios'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Start from './pages/Start';
import Quiz from './pages/Quiz'
import Header from './components/Header';
import Footer from './components/Footer';
import Result from './pages/Result'
import {React, useState} from 'react'

function App() {
  const [name, setName] = useState();
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0); 



  const fetchQuestions = async(category, diff) => {
    const {data} = await axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${diff}&type=multiple`);
    
    setQuestions(data.results)
  };

  return (
    <BrowserRouter>
      <div className='app'>
        <Header/>
        <Routes>
          <Route path='/' element={<Start name={name} setName={setName} fetchQuestions={fetchQuestions}/>}/>
          <Route path='quiz' element={<Quiz name={name} questions={questions} setQuestions={setQuestions} score={score} setScore={setScore} />}/>
          <Route path='result' element={<Result  name={name} score={score} />}/>

        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
