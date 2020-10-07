import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = () => {

  const dialogsData = [
    {
      id: 1,
      name: 'Alex'
    },
    {
      id: 2,
      name: 'Petr'
    },
    {
      id: 3,
      name: 'Igor'
    },
    {
      id: 4,
      name: 'Lera'
    },
    {
      id: 5,
      name: 'Nina'
    }
  ]

  const messagesData = [
    {
      id: 1,
      message: 'Hi'
    },
    {
      id: 2,
      message: 'How are you?'
    },
    {
      id: 3,
      message: 'Yo'
    },
  ]

  const dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

  const messagesElements = messagesData.map(message => <Message message={message.message} id={message.id}/>);

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