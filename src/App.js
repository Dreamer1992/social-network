import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header/>
      <Sidebar/>
      <div className='app-content'>
        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
        <Route path='/users' render={() => <UsersContainer/>}/>
      </div>
    </div>
  );
}

export default App;
