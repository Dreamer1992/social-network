import React from 'react';
import styles from './ProfileData.module.css';

const Contact = ({contactTitle, contactValue}) => {
  return <div><b className={styles.contactItem}>{contactTitle}</b>: <a href={contactValue} target='_blank'>{contactValue}</a></div>
}

export default Contact;