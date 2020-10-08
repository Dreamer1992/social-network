import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
  return (
    <div className={styles.post}>
      <img
        src="https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"
        alt=""/>
      <span>{props.message}</span>
      <div>Like {props.like}</div>
    </div>
  )
}

export default Post;