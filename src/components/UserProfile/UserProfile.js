import React from 'react';
import './UserProfile.scss';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const currentUser = useSelector(state => state.currentUser);

  return (
    <div className='background'>
      <section>
        <div className='image-box'>
          <img
            src={currentUser.profile.image}
            alt='your profile picture'
            className='profile-photo'/>
          <button>edit profile</button>
        </div>
        <div className='desc-box'>
          <h2>{currentUser.name.toLowerCase()}</h2>
          <p>{currentUser.location.city}, {currentUser.location.state}</p>
          <h3>{currentUser.mentorProfile.fieldOfKnowledge}</h3>
          <p>{currentUser.profile.aboutMe}</p>
        </div>
      </section>
    </div>
  )
}

export default UserProfile;
