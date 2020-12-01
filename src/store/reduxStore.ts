import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import profileReducer from './reducers/profileReducer'
import dialogsReducer from './reducers/dialogsReducer'
import sidebarReducer from './reducers/sidebarReducer'
import usersReducer from './reducers/usersReducer'
import appReducer from "./reducers/appReducer"
import authReducer from './reducers/authReducer'
import ThunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  app: appReducer,
  auth: authReducer,
  form: formReducer
})

type RootReducer = typeof rootReducer // (globalstate: AppStateType) => AppStateType
export type AppStateType = ReturnType<typeof rootReducer>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(ThunkMiddleware)
))

// @ts-ignore
window.__store__ = store

export default store
