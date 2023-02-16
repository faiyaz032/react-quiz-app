import React from 'react';

import Answers from '../../Answers/Answers';
import classes from './Question.module.css';

export default function Question({ questionText, answers }) {
  return (
    <div className={classes.question}>
      <div className={classes.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        {questionText}
      </div>
      <Answers />
    </div>
  );
}
