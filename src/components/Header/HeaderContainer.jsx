import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {logout} from "../../store/reducers/authReducer";

class HeaderContainer extends React.Component {
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

export default connect(mapStateToProps, {logout})(HeaderContainer);
