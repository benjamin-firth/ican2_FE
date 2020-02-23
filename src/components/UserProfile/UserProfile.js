import React from 'react';
import './UserProfile.scss';
import { useSelector } from 'react-redux';

const UserProfile = ({ user }) => {
  console.log(user);

  return (
    <div className='background'>
      <section>
        <div className='image-box'>
          <img
            src={user.profile.image}
            alt='your profile picture'
            className='profile-photo'/>
          <button>edit profile</button>
        </div>
        <div className='desc-box'>
          <h2>{user.name.toLowerCase()}</h2>
          <p>{user.location.city}, {user.location.state}</p>
          <h3>{user.mentorProfile.fieldOfKnowledge}</h3>
          <p>{user.profile.aboutMe}</p>
        </div>
      </section>
    </div>
  )
}

export default UserProfile;
