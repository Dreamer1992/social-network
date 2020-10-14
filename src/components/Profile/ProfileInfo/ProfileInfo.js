import React from 'react';
import profileBg from '../../../assets/images/profile_bg.png';

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src={profileBg} alt=''/>
      </div>
      <div>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;