import React from 'react';
import styles from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {

  let postsElements = props.posts.map(post => <Post id={post.id} message={post.message} like={post.like}/>);

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  }

  return (
    <div>
      <h3>My posts</h3>

      <div className={styles.postTextarea}>
        <div>
          <textarea ref={newPostElement} rows="2"></textarea>
        </div>
        <div>
          <button className={styles.btn} onClick={ addPost }>Add post</button>
        </div>
      </div>

      {postsElements}
    </div>
  )
}

export default Posts;