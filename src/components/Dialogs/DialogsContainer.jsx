import React from 'react';
import {connect} from 'react-redux';
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogsReducer";
import Dialogs from './Dialogs';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageTextCreator: (text) => {
      dispatch(updateNewMessageTextCreator(text))
    },
    sendMessageCreator: () => {
      dispatch(sendMessageCreator())
    }
  }
}

let authRedirectComponent = withAuthRedirect(Dialogs);

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(authRedirectComponent);

export default DialogsContainer;