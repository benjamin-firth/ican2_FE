import React from 'react';
import './MeetupContainer.scss';
import Meetup from '../Meetup/Meetup';

const MeetupContainer = () => {
  return (
    <section className='meetups-container'>
      <Meetup />
      <Meetup />
    </section>
  );
}

export default MeetupContainer;
