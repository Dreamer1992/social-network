import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import defaultAvatar from '../../../assets/images/default_avatar.png';
import ProfileStatusWithHook from "./ProfileStatusWithHook";

const ProfileInfo = ({profile, status, updateUserStatus, isOwner, savePhoto}) => {
  if (!profile) {
    return <Preloader/>
  }

  let onMainPhotoSelected = (e) => {
    console.log(e)
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  return (
    <div>
      {/*<div className={styles.profileTopBg}>*/}
      {/*  <img src={profileTopBg} alt=''/>*/}
      {/*</div>*/}
      <div className={styles.profileAvatar}>
        <img src={profile.photos.large ? profile.photos.large : defaultAvatar} alt=""/>
        {isOwner && <div><input type={'file'} onChange={onMainPhotoSelected}/></div>}
        <ProfileStatusWithHook status={status} updateUserStatus={updateUserStatus}/>
        <p>{profile.fullName}</p>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;