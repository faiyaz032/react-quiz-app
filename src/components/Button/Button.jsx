import React from 'react';
import classes from './Button.module.css';

export default function Button({ disabled, type, text, children }) {
  return (
    <button type={type} disabled={disabled} className={`${classes.button} ${classes.next}`}>
      <span>{text}</span>
      {children}
    </button>
  );
}
