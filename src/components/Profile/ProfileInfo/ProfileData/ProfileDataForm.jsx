import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Input, Textarea} from '../../../common/FormsControls/FormsControls';
import {required} from "../../../../utils/validators/validators";
import styles from './ProfileData.module.css';

const ProfileDataForm = ({handleSubmit, profile, error}) => {
  return (
    <form onSubmit={handleSubmit} className={styles.profileDataForm}>
      <div className={styles.formGroup}>
        <b>Full name</b>:
        <Field component={Input}
               name='fullName'
               validate={[required]}
        />
      </div>

      <div className={styles.formGroup}>
        <b>Job description</b>:
        <Field component={Input}
               name='lookingForAJobDescription'
               validate={[required]}
        />
      </div>

      <div className={styles.formGroup}>
        <b>About me</b>:
        <Field component={Textarea}
               name='aboutMe'
               validate={[required]}
        />
      </div>

      <div>
        <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
        return (
          <div key={key} className={styles.formGroup}>
            <b>{key}</b>:
            <Field component={Input}
                   name={'contacts.' + key}
            />
          </div>
        )
      })}
      </div>

      {error && <div className={styles.hasError}>
        {error}
      </div>}

      <button>Save</button>
    </form>
  )
}

export default reduxForm({form: 'editProdile'})(ProfileDataForm);