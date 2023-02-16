import React from 'react';
import classes from './Button.module.css';

export default function Button({ text, children }) {
  return (
    <button className={`${classes.button} ${classes.next}`}>
      <span>{text}</span>
      {children}
    </button>
  );
}
