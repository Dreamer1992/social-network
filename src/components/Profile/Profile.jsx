import React from 'react';
import styles from './Profile.module.css';
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
  return (
    <main className={styles.profile}>
      <ProfileInfo/>
      <Posts/>
    </main>
  )
}

export default Profile;