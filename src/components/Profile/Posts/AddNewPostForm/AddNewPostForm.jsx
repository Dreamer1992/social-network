import React from "react";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../common/FormsControls/FormsControls";
import styles from "../Posts.module.css";

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

export default reduxForm({form: 'addNewPost'})(AddNewPostForm);