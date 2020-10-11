import React from "react";
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="https://sun9-58.userapi.com/c637526/v637526465/46948/MYX-VzYtTnU.jpg?ava=1" className={styles.logo}
           alt="logo"/>
    </header>
  )
}

export default Header;