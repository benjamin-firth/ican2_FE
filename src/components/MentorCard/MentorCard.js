import React from 'react';
import './MentorCard.scss';

const MentorCard = ({ mentor }) => {

  return (
    <section>
      <p>Hi I am {mentor.name}</p>
    </section>
  );
}

export default MentorCard;
