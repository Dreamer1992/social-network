import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

function App(props) {
  return (
    <div className="app-wrapper">
      <HeaderContainer/>
      <Sidebar/>
      <div className='app-content'>
        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
        <Route path='/users' render={() => <UsersContainer/>}/>
        <Route path='/login' render={() => <Login/>}/>
      </div>
    </div>
  );
}

export default App;
