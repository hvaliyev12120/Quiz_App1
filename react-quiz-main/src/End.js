import React from 'react';
import { useGlobalContext } from './context';

const End = () => {
  const { isEndOpen, closeEnd, correct, questions } = useGlobalContext();

  return (
    <div className={`${isEndOpen ? 'end-container isOpen' : 'end-container'}`}>
      <div className='end-content'>
        <h2>congrats!</h2>
        <p>You answered {((correct / questions.length) * 100).toFixed(0)}% of questions correctly</p>
        <button className='close-btn' onClick={closeEnd}>
          play again
        </button>
      </div>
    </div>
  );
};

export default End;
