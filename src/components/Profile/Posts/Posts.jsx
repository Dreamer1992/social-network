import React from 'react';
import styles from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {

  let postsElements = props.posts.map(post => <Post id={post.id} message={post.message} like={post.like}/>);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({type: 'ADD-POST'});
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
    props.dispatch(action);
  }

  return (
    <div>
      <h3>My posts</h3>

      <div className={styles.postTextarea}>
        <div>
          <textarea ref={newPostElement} onChange={onPostChange} rows="2" value={props.newPostText}/>
        </div>
        <div>
          <button className={styles.btn} onClick={addPost}>Add post</button>
        </div>
      </div>

      {postsElements}
    </div>
  )
}

export default Posts;