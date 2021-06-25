import './App.css';
import QuestionList from './questionList.json'
import QuestionCard from './components/QuestionCard'
import Buttons from './components/Button';
import {useState } from 'react'

function App() {

  let [questionNum, setQuestionNum] = useState(0)
  const shuffledQuestions = QuestionList["questions"].sort(() => Math.random() - 0.5)
  let [ansHidden, setAnsHidden] = useState(true)

  function goBackQuestion() {
    if(questionNum > 0) {
      setAnsHidden(true)
      setQuestionNum(questionNum - 1)
    }
  }

  function goNext() {
    if(ansHidden === false) {
      setAnsHidden(true)
      setQuestionNum(questionNum + 1)
    }else if(ansHidden === true) {
      setAnsHidden(false)
    }
    console.log(`Clicked! Ans is now ${ansHidden} on question ${questionNum}`)
  }

  return (
    <div className="App">
      <QuestionCard question={shuffledQuestions[questionNum]} stateAns={ansHidden}/>
      <Buttons backBtn={goBackQuestion} nextBtn={goNext} stateAns={ansHidden}/>

      <span className="question-counter">
         Question {questionNum + 1}
      </span>
    </div>
  );
}

export default App;
