import React from 'react';
import styles from './ProfileInfo.module.css';
import profileTopBg from '../../../assets/images/profile_bg.png';
import Preloader from "../../common/Preloader/Preloader";
import defaultAvatar from '../../../assets/images/default_avatar.png';

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
        <img src={props.profile.photos.large ? props.profile.photos.large : defaultAvatar} alt=""/>
        <p>{props.profile.fullName}</p>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;