import React from 'react';
import Answer from './Answer/Answer';
import classes from './Answers.module.css';

function Answers() {
  return (
    <div className={classes.answers}>
      <Answer />
      <Answer />
      <Answer />
      <Answer />
      <Answer />
      <Answer />
      <Answer />
      <Answer />
      <Answer />
      <Answer />
    </div>
  );
}

export default Answers;
