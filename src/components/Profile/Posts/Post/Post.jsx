import React from 'react';
import styles from './Post.module.css';
import myPhoto from '../../../../assets/images/default_avatar.png';

const Post = (props) => {
  return (
    <div className={styles.post}>
      <img
        src={myPhoto}
        alt=""/>
      <span>{props.message}</span>
      <div>Like {props.like}</div>
    </div>
  )
}

export default Post;