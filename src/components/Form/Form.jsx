import React from 'react';
import classes from './Form.module.css';

export default function Form({ className, children }) {
  return (
    <form className={`${className} ${classes.form}`} action="#">
      {children}
    </form>
  );
}
