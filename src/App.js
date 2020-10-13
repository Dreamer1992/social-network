import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile.jsx';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header/>
      <Sidebar/>
      <div className='app-content'>
        <Route path='/profile' render={() => <Profile/>}/>
        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
        <Route path='/users' render={() => <UsersContainer/>}/>
      </div>
    </div>
  );
}

export default App;
