import React from 'react';
import classes from './Answer.module.css';

export default function Answer() {
  return (
    <label className={classes.answer} htmlFor="option1">
      <input type="checkbox" id="option1" />A New Hope 1
    </label>
  );
}
