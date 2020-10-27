import React, {useState} from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import defaultAvatar from '../../../assets/images/default_avatar.png';
import ProfileStatusWithHook from './ProfileStatusWithHook';
import ProfileData from './ProfileData/ProfileData';
import ProfileDataForm from "./ProfileData/ProfileDataForm";

const ProfileInfo = ({profile, status, updateUserStatus, isOwner, savePhoto, saveProfile}) => {

  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader/>
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  const onSubmit = (formData) => {
    saveProfile(formData)
      .then(() => {
        setEditMode(false);
      });
  }

  return (
    <div>
      {/*<div className={styles.profileTopBg}>*/}
      {/*  <img src={profileTopBg} alt=''/>*/}
      {/*</div>*/}
      <div className={styles.profileAvatar}>
        <img src={profile.photos.large ? profile.photos.large : defaultAvatar} alt=""/>
        {isOwner && <div><input type={'file'} onChange={onMainPhotoSelected}/></div>}

        {editMode
          ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
          : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {
            setEditMode(true)
          }}/>
        }

        <ProfileStatusWithHook status={status} updateUserStatus={updateUserStatus}/>
      </div>
    </div>
  )
}

export default ProfileInfo;