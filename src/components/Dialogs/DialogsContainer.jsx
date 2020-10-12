import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

  let state = props.store.getState().dialogsPage;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  }

  let onNewMessageChange = (text) => {
    props.store.dispatch(updateNewMessageTextCreator(text))
  }

  return (
    <Dialogs
      updateNewMessageTextCreator={onNewMessageChange}
      sendMessageCreator={onSendMessageClick}
      dialogsPage={state}
    />
  )
}

export default DialogsContainer;