import React from 'react';
import styles from './Posts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={Textarea}
             name={'newPostText'}
             row='2'
             value={props.newPostText}
             validate={[required, maxLength10]}
      />
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