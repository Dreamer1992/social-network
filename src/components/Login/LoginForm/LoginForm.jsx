import React from 'react';
import {Field, reduxForm} from "redux-form";
import {required} from "../../../utils/validators/validators";
import {Input} from "../../common/FormsControls/FormsControls";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Input}
               name='email'
               placeholder='Email'
               validate={[required]}
        />
      </div>
      <div>
        <Field component={Input}
               type='password'
               name='password'
               placeholder='Password'
               validate={[required]}
        />
      </div>
      <div>
        <Field component={Input}
               type={'checkbox'}
               name='rememberMe'
        /> remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

export default reduxForm({form: 'login'})(LoginForm);

