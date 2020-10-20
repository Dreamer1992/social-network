import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Field, reduxForm} from "redux-form";

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={'textarea'}
             name='newMessageText'
             rows='3'
             placeholder='Enter your message'
      />
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>);
  let messagesElements = state.messages.map(message => <Message key={message.id} message={message.message}
                                                                id={message.id}/>);

  let addNewMessage = (values) => {
    props.sendMessageCreator(values.newMessageText);
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
        {dialogsElements}
      </div>

      <div className={styles.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;