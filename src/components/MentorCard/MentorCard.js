import React from 'react';
import './MentorCard.scss';

const MentorCard = ({ mentor }) => {

  return (
      <section className='mentor-card-container'>
        <img
          src={mentor.profile.image}
          alt='mentor profile picture'
          className='profile-photo'/>
        <h2>{mentor.name.toLowerCase()}</h2>
        <h3>{mentor.mentorProfile.fieldOfKnowledge}</h3>
        <p>{mentor.location.city}, {mentor.location.state}</p>
        <p>{mentor.profile.aboutMe}</p>
        <button>connect</button>
      </section>
  );
}

export default MentorCard;
