import React from 'react';
import styles from './DialogItem.modules.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={styles.dialogItem}>
      <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem;