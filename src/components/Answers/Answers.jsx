import React from 'react';
import Answer from './Answer/Answer';
import classes from './Answers.module.css';

function Answers() {
  return (
    <div className={classes.answers}>
      <Answer id={'option1'} answerText="A New Hope" />
    </div>
  );
}

export default Answers;
