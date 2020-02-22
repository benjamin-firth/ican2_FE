import React from 'react';
import './UserProfile.scss';

const UserProfile = () => {

  return (
    <div className='background'>
      <section>
        <div className='image-box'>
          <img
            src=''
            alt='beer drinkin trish'
            className='profile-photo'/>
          <button>edit profile</button>
        </div>
        <div className='desc-box'>
          <h2>Name</h2>
          <h3>Aspiring Software Developer</h3>
          <p>Lorom ipsum words yay girl what do I even say here? I'm not great at coming up with these things. This is what I should be practicing instead of coding...</p>
        </div>
      </section>
    </div>
  )
}

export default UserProfile;
