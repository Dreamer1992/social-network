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
  ]
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let text = action.newMessageText;
      return {
        ...state,
        messages: [...state.messages, {id: 4, message: text}]
      };
    default:
      return state;
  }
}

export const sendMessageCreator = (newMessageText) => ({type: SEND_MESSAGE, newMessageText})

export default dialogsReducer;