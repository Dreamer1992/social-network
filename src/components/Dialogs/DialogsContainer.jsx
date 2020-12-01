import {connect} from 'react-redux';
import {sendMessageCreator} from "../../store/reducers/dialogsReducer";
import Dialogs from './Dialogs';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessageCreator: (newMessageText) => {
      dispatch(sendMessageCreator(newMessageText))
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
