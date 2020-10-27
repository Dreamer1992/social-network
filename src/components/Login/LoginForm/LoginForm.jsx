import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {required} from '../../../utils/validators/validators';
import {Input} from '../../common/FormsControls/FormsControls';
import styles from './../../common/FormsControls/FormsControls.module.css';

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
  return (
    <form onSubmit={handleSubmit}>
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

      {captchaUrl && <img src={captchaUrl}/>}

      {
        error && <div className={styles.loginError}>
          {error}
        </div>
      }
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

export default reduxForm({form: 'login'})(LoginForm);

