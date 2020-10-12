import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
  let messagesElements = state.messages.map(message => <Message message={message.message} id={message.id}/>);
  let newMessageText = state.newMessageText;

  let onSendMessageClick = () => {
    props.sendMessageCreator();
  }

  let onNewMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessageTextCreator(text);
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
        {dialogsElements}
      </div>

      <div className={styles.messages}>
        <div>{messagesElements}</div>
        <div>
          <div><textarea
            rows="3"
            value={newMessageText}
            placeholder='Enter your message'
            onChange={onNewMessageChange}></textarea></div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;