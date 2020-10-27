import React from 'react';
import Contact from './Contact';

const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return (
    <div>
      <div>
        {isOwner && <button onClick={goToEditMode}>Edit</button>}
      </div>
      <div>
        <b>Full name</b>: {profile.fullName}
      </div>
      <div>
        <b>About me</b>: {profile.aboutMe}
      </div>
      <div>
        <b>Job description</b>: {profile.lookingForAJobDescription}
      </div>
      <div>
        <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
        if (profile.contacts[key]) {
          return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        }
      })}
      </div>
    </div>
  )
}

export default ProfileData;