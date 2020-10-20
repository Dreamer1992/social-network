import React from 'react';
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div><Field component={'input'} type={'text'} name={'login'} placeholder={'Login'}/></div>
      <div><Field component={'input'} type={'text'} name={'password'} placeholder={'Password'}/></div>
      <div><Field component={'input'} type={'checkbox'} name={'remember'}/> remember me</div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}

export default Login;