import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {required} from '../../../utils/validators/validators';
import {Input} from '../../common/FormsControls/FormsControls';
import styles from './../../common/FormsControls/FormsControls.module.css';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={styles.formGroup}>
        <Field component={Input}
               name='email'
               placeholder='Email'
               validate={[required]}
        />
      </div>
      <div className={styles.formGroup}>
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
      {
        props.error && <div className={styles.loginError}>
          {props.error}
        </div>
      }
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

export default reduxForm({form: 'login'})(LoginForm);

