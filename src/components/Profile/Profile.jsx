import React from 'react';
import styles from './Profile.module.css';
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <main className={styles.profile}>
      <ProfileInfo/>
      <Posts posts={props.profilePage.posts}
             newPostText={props.profilePage.newPostText}
             addPost={props.addPost}
             updateNewPostText={props.updateNewPostText}
      />
    </main>
  )
}

export default Profile;