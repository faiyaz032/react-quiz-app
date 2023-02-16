import React from 'react';
import classes from './Answer.module.css';

export default function Answer({ id, answerText, isCorrect }) {
  return (
    <label className={`${classes.answer} ${isCorrect ? classes.correct : ''} `} htmlFor={id}>
      <input type="checkbox" id={id} />
      {answerText}
    </label>
  );
}
