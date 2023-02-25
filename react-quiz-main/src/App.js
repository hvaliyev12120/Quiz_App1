import React from 'react';
import { useGlobalContext } from './context';

import SetupForm from './SetupForm';
import Loading from './Loading';
import End from './End';
function App() {
  const { waiting, loading, questions, index, correct, nextQuestion, checkAnswer, closeEnd} = useGlobalContext();

  if (waiting) {
    return <SetupForm />;
  }

  if (loading) {
    return <Loading />;
  }

  const { question, incorrect_answers, correct_answer } = questions[index];
  
  let answers = [...incorrect_answers];
  const tempIndex = Math.floor(Math.random() * 4);
  console.log(tempIndex);

  if (tempIndex === 3) {
    answers.push(correct_answer);
  } else {
    // Swapping Algorithm
    answers.push(answers[tempIndex]);
    answers[tempIndex] = correct_answer;
  }

  return (
    <main>
      <End />
      <section className='quiz'>
        <p className='correct-answers'>
          correct answers: {correct}/{index}
        </p>
        <article className='container'>
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className='btn-container'>
            {answers.map((answer, index) => {
              return (
                <button
                  key={index}
                  className='answer-btn'
                  onClick={() => checkAnswer(correct_answer === answer)}
                  dangerouslySetInnerHTML={{ __html: answer }}
                />
              );
            })}
          </div>
        </article>
        <button className='next-question' onClick={nextQuestion}>
          next question
        </button>
      </section>
    </main>
  );
}

export default App;