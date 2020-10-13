import React from 'react';
import styles from './Sidebar.module.css';
import {NavLink} from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <ul>
        <li><NavLink to="/profile" activeClassName={styles.activeLink}>Profile</NavLink></li>
        <li><NavLink to="/dialogs" activeClassName={styles.activeLink}>Messages</NavLink></li>
        <li><NavLink to='/users' activeClassName={styles.activeLink}>Users</NavLink></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Music</a></li>
        <li><a href="#">Setting</a></li>
      </ul>
    </nav>
  )
}

export default Sidebar;