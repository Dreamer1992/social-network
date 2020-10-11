import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you?', like: 10},
        {id: 1, message: 'It\'s my first post', like: 17}
      ],
      newPostText: 'it-kamasutra'
    },
    dialogsPage: {
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
  },
  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
}

export default store;
window.store = store;