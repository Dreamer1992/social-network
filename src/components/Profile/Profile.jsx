import React from 'react';
import styles from './Profile.module.css';
import PostsContainer from "./Posts/PostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <main className={styles.profile}>
      <ProfileInfo isOwner={props.isOwner}
                   savePhoto={props.savePhoto}
                   saveProfile={props.saveProfile}
                   profile={props.profile}
                   status={props.status}
                   updateUserStatus={props.updateUserStatus}
      />
      <PostsContainer/>
    </main>
  )
}

export default Profile;