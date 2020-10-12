import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
  return (
    <main className={styles.profile}>
      <ProfileInfo/>
      <PostsContainer store={props.store}/>
    </main>
  )
}

export default Profile;