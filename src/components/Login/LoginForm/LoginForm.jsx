import React from 'react';
import {Field, reduxForm} from "redux-form";
import {required} from "../../../utils/validators/validators";
import {Input} from "../../common/FormsControls/FormsControls";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Input}
               type={'text'}
               name={'login'}
               placeholder={'Login'}
               validate={[required]}
        />
      </div>
      <div>
        <Field component={Input}
               type={'text'}
               name={'password'}
               placeholder={'Password'}
               validate={[required]}
        />
      </div>
      <div>
        <Field component={Input}
               type={'checkbox'}
               name={'remember'}
        /> remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

export default reduxForm({form: 'login'})(LoginForm);

