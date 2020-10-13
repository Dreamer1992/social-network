import React from 'react';
import styles from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {

  let postsElements = props.posts.map(post => <Post key={post.id} id={post.id} message={post.message} like={post.like}/>);

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div>
      <h3>My posts</h3>

      <div className={styles.postTextarea}>
        <div>
          <textarea ref={newPostElement} onChange={onPostChange} rows="2" value={props.newPostText}/>
        </div>
        <div>
          <button className={styles.btn} onClick={onAddPost}>Add post</button>
        </div>
      </div>

      {postsElements}
    </div>
  )
}

export default Posts;