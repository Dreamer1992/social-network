import React from 'react';
import styles from './Preloader.module.css';
import preloader from '../../../assets/images/preloader.gif';

let Preloader = (props) => {
  return (
    <div className={styles.preloaderWrapper}>
      <img src={preloader} alt="Loading"/>
    </div>
  )
}

export default Preloader;