import React from 'react';
import './App.css';
import {Route, withRouter} from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

    if (!this.props.initialized) {
      return <Preloader/>
    }

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
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})
)(App);
