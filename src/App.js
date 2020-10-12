import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile.jsx';
import {Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header/>
      <Sidebar/>
      <div className='app-content'>
        <Route path='/profile' render={() => <Profile/>}/>
        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
      </div>
    </div>
  );
}

export default App;
