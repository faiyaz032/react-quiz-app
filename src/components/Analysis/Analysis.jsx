import React from 'react';
import Question from './Question/Question';

export default function Analysis() {
  return (
    <div className="analysis">
      <h1>Question Analysis</h1>
      <h4>You answered 5 out of 10 questions correctly</h4>

      <Question questionText="My first question" />
      <Question questionText="My second question" />
    </div>
  );
}
