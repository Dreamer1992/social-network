import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Sidebar/>
        <div className='app-content'>
          <Route path='/profile' render={() => <Profile
            profilePage={props.state.profilePage}
            dispatch={props.dispatch}
          />}/>
          <Route path='/dialogs' render={() => <Dialogs store={props.store} />}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
