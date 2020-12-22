import React from "react"
import {Field, reduxForm} from "redux-form"
import {required} from "../../../utils/validators/validators"
import {Input} from "../../common/FormsControls/FormsControls"
import styles from "./../../common/FormsControls/FormsControls.module.css"

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <Field component={Input}
                           name='email'
                           placeholder='Почта'
                           validate={[required]}
                    />
      </div>
                <div className={styles.formGroup}>
                    <Field component={Input}
                           type='password'
                           name='password'
                           placeholder='Пароль'
                           validate={[required]}
                    />
                </div>
                <div className={styles.formGroup}>
                    <Field component={Input}
                           type={'checkbox'}
                           name='rememberMe'
                    /> Запомнить меня
                </div>

      {captchaUrl && <img src={captchaUrl} alt=''/>}
      {captchaUrl &&
      <div className={styles.formGroup}>
        <Field component={Input}
               name='captcha'
               placeholder='Символы с изображения'
               validate={[required]}
        />
      </div>}

      {
        error && <div className={styles.loginError}>
          {error}
        </div>
      }
      <div>
          <button>Отправить</button>
      </div>
    </form>
  )
}

export default reduxForm({form: 'login'})(LoginForm);

