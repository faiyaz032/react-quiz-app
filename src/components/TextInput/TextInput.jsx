import React from 'react';
import classes from './TextInput.module.css';

export default function TextInput({ ...rest }) {
  return (
    <div className={classes.textInput}>
      <input {...rest} />
      <span className="material-icons-outlined"> {...rest.icontext} </span>
    </div>
  );
}
