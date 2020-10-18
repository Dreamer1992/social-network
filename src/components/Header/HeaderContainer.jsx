import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {authUser, setAuthUserData} from "../../redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authUser();
  }

  render() {
    return (
      <Header {...this.props}/>
    )
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData, authUser})(HeaderContainer);