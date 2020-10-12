import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile.jsx';
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Sidebar/>
        <div className='app-content'>
          <Route path='/profile' render={() => <Profile store={props.store}/>}/>
          <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
