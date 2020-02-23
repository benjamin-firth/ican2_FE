import React from 'react';
import './UserProfile.scss';
import { useSelector } from 'react-redux';

const UserProfile = ({ user }) => {
  const currentUser = useSelector(state => state.currentUser);

  return (
    <section className='user-profile-container'>
      <section className='user-profile'>
        <div className='user-general-info'>
          <div className='user-image-container'>
            <img
              src={user.profile.image}
              alt='your profile picture'
              className='profile-photo'/>
            {user.id === currentUser.id ? <button>edit profile</button> : <button>message</button>}
          </div>
          <section className='user-description-container'>
            <h2>{user.name.toLowerCase()}</h2>
            <h3>{user.mentorProfile.fieldOfKnowledge}</h3>
            <p>{user.location.city}, {user.location.state} | {user.profile.gender}</p>
            <p>{user.profile.aboutMe}</p>
          </section>
        </div>
        {user.mentor &&
          <section className='mentor-questions-container'>
            <h4>EXPERIENCE LEVEL</h4>
            <p>{user.mentorProfile.experienceLevel}</p>
            <h4>DESCRIBE A TYPICAL DAY AT WORK.</h4>
            <p>{user.mentorProfile.workDayQuestion}</p>
            <h4>WHAT DO YOU ENJOY MOST ABOUT YOUR WORK?</h4>
            <p>{user.mentorProfile.enjoymentQuestion}</p>
            <h4>WHAT DO YOU FEEL THE MOST EXCITED ABOUT TEACHING OTHERS?</h4>
            <p>{user.mentorProfile.teachingPointsQuestion}</p>
            <h4>WHAT IS ONE PIECE OF ADVICE YOU HAVE FOR OTHERS LOOKING TO JOIN THIS FIELD?</h4>
            <p>{user.mentorProfile.adviceQuestion}</p>
          </section>
        }
      </section>
    </section>
  )
}

export default UserProfile;
