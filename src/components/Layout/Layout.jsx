import React, { Fragment } from 'react';
import Nav from '../Nav/Nav';
import classes from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <Fragment>
      <Nav />
      <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>
    </Fragment>
  );
}
