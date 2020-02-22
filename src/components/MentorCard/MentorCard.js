import React from 'react';
import './MentorCard.scss';

const MentorCard = ({ mentor }) => {

  return (
    <div className='background'>
      <section>
        <div className='image-box'>
          <img
            src={mentor.profile.image}
            alt='mentor profile picture'
            className='profile-photo'/>
          <button>connect</button>
        </div>
        <div className='desc-box'>
          <h2>{mentor.name.toLowerCase()}</h2>
          <p>{mentor.location.city}, {mentor.location.state}</p>
          <h3>{mentor.mentorProfile.fieldOfKnowledge}</h3>
          <p>{mentor.profile.aboutMe}</p>
        </div>
      </section>
    </div>
  );
}

export default MentorCard;
