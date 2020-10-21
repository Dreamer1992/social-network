import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';
import appReducer from "./appReducer";
import authReducer from './authReducer';
import ThunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  app: appReducer,
  auth: authReducer,
  form: formReducer
});

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));

export default store;