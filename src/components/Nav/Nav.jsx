import React from 'react';
import logo from '../../assets/images/logo-bg.png';
import Account from './Account/Account';
import classes from './nav.module.css';

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="index.html" className={classes.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </a>
        </li>
      </ul>

      <Account />
    </nav>
  );
}
