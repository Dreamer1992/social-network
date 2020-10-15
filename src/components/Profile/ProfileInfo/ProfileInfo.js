import React from 'react';
import styles from './ProfileInfo.module.css';
import profileTopBg from '../../../assets/images/profile_bg.png';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <div>
      <div className={styles.profileTopBg}>
        <img src={profileTopBg} alt=''/>
      </div>
      <div className={styles.profileAvatar}>
        <img src={props.profile.photos.large} alt=""/>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;