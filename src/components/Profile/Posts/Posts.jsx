import React from 'react';
import styles from './Posts.module.css';
import Post from "./Post/Post";

const Posts = () => {

  const postsData = [
    {
      id: 1,
      message: 'Hi, how are you?'
    },
    {
      id: 1,
      message: 'It\'s my first post'
    }
  ]

  const postsElements = postsData.map(post => <Post message={post.message} id={post.id}/>);

  return (
    <div>
      <h3>My posts</h3>

      <div className={styles.postTextarea}>
        <div>
          <textarea name="new_post" rows="2"></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>

      {postsElements}
    </div>
  )
}

export default Posts;