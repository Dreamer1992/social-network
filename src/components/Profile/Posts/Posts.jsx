import React from 'react';
import styles from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {

  const postsElements = props.posts.map(post => <Post id={post.id} message={post.message} like={post.like}/>);

  return (
    <div>
      <h3>My posts</h3>
