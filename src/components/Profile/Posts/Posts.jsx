import React from 'react';
import styles from './Posts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={'textarea'} name={'newPostText'} row='2' value={props.newPostText}/>
      <button className={styles.btn}>Add post</button>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm({form: 'addNewPost'})(AddNewPostForm);

const Posts = (props) => {

  let postsElements = props.posts.map(post => <Post key={post.id} id={post.id} message={post.message}
                                                    like={post.like}/>);

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  // let onPostChange = () => {
  //   let text = newPostElement.current.value;
  //   props.updateNewPostText(text);
  // }

  return (
    <div>
      <h3>My posts</h3>

      <div className={styles.postTextarea}>
        <div>
          <AddNewPostFormRedux onSubmit={onAddPost}/>
        </div>
      </div>

      {postsElements}
    </div>
  )
}

export default Posts;