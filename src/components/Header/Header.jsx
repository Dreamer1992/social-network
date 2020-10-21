import React from "react";
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <img src="https://sun9-58.userapi.com/c637526/v637526465/46948/MYX-VzYtTnU.jpg?ava=1" alt="logo"/>
      </div>
      <div className={styles.headerAuth}>
        {props.isAuth
          ? <div>{props.login} <button onClick={props.logout}>Log out</button></div>
          : <NavLink to={'/login'}>Login</NavLink>
        }

      </div>
    </header>
  )
}

export default Header;