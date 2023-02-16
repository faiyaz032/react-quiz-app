import React from 'react';
import classes from './TextInput.module.css';

export default function TextInput({ type, placeholder, iconText }) {
  return (
    <div className={classes.textInput}>
      <input type={type} placeholder={placeholder} />
      <span className="material-icons-outlined"> {iconText} </span>
    </div>
  );
}
