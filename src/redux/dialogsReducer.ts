const SEND_MESSAGE = 'SEND-MESSAGE'

type DialogType = {
  id: number
  name: string
}

type MessageType = {
  id: number
  message: string
}

let initialState = {
  dialogs: [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'Petr'},
    {id: 3, name: 'Igor'},
    {id: 4, name: 'Lera'},
    {id: 5, name: 'Nina'}
  ] as Array<DialogType>,
  messages: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yo'},
  ] as Array<MessageType>
}

type InitialStateType = typeof initialState

let dialogsReducer = (state = initialState, action: any): InitialStateType => {
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

type SendMessageCreatorActionType = {
  type: typeof SEND_MESSAGE
  newMessageText: string
}

export const sendMessageCreator = (newMessageText: string): SendMessageCreatorActionType => ({
  type: SEND_MESSAGE,
  newMessageText
})

export default dialogsReducer
