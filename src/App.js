import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Sidebar/>
        <div className='app-content'>
          <Route path='/profile' render={() => <Profile/>}/>
          <Route path='/dialogs' render={() => <Dialogs/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
