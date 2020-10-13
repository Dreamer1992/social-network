const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  dialogs: [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'Petr'},
    {id: 3, name: 'Igor'},
    {id: 4, name: 'Lera'},
    {id: 5, name: 'Nina'}
  ],
  messages: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yo'},
  ],
  newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.text
      };
    case SEND_MESSAGE:
      let text = state.newMessageText;
      return {
        ...state,
        newMessageText: '',
        messages: [...state.messages, {id: 4, message: text}]
      };
    default:
      return state;
  }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  text: text
})

export default dialogsReducer;