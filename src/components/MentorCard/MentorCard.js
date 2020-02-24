import React from 'react';
import { Link } from 'react-router-dom';
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
        {mentor.profile.gender !== 'none-specified' ? <p>{mentor.location.city}, {mentor.location.state} | {mentor.profile.gender}</p> : <p>{mentor.location.city}, {mentor.location.state}</p>}
        <p>{mentor.profile.aboutMe}</p>
        <Link to={`/mentors/${mentor.id}`}>
          <button>view profile</button>
        </Link>
      </section>
  );
}

export default MentorCard;
