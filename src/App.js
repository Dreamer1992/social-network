import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Sidebar/>
        <div className='app-content'>
          <Route path='/profile' render={() => <Profile state={props.state.profilePage} addPost={props.addPost}/>}/>
          <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
