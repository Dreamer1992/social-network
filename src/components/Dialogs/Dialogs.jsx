import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

  const dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

  const messagesElements = props.state.messages.map(message => <Message message={message.message} id={message.id}/>);

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
        {dialogsElements}
      </div>

      <div className={styles.messages}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs;