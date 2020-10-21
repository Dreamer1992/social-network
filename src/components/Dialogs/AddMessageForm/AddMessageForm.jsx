import React from 'react';
import {Textarea} from "../../common/FormsControls/FormsControls";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={Textarea}
             name='newMessageText'
             rows='3'
             placeholder='Enter your message'
             validate={[required, maxLength50]}
      />
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}

export default reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);