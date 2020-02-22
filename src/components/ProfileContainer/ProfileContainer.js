import React, { useState, useEffect } from 'react';
import './ProfileContainer.scss';
import UserProfile from '../UserProfile/UserProfile';

const ProfileContainer = () => {
  const [mentors, setMentors] = useState([]);


  const getMentors = () => {
    const body = {"query": "{mentors {name email}}"};

    const options = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      }
    };

    fetch('https://ican2-be-rails.herokuapp.com/api/v1/graphql', options)
      .then(response => response.json())
      .then(data => setMentors(data.data.mentors))
    };

    const displayMentors = () => {
      return mentors.map(mentor => (<p>{mentor.name}</p>))
    }

  useEffect(() => getMentors(), [])

  return (
    <section>
      {displayMentors()}
    </section>
  );
}

export default ProfileContainer;
