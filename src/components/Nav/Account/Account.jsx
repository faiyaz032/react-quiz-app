import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import classes from './Account.module.css';

export default function Account() {
  const { currentUser, logout } = useAuth();

  return (
    <div className={classes.account}>
      {currentUser && (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span>{currentUser.displayName}</span>

          <span className="material-icons-outlined" title="Logout" onClick={logout}>
            logout
          </span>
        </>
      )}
      {!currentUser && (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign up</Link>
        </>
      )}
    </div>
  );
}
