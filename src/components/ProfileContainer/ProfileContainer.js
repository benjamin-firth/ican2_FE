import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadMentors } from '../../actions';
import './ProfileContainer.scss';
import MentorCard from '../MentorCard/MentorCard';

const ProfileContainer = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const mentors = useSelector(state => state.mentors);
  const currentUser = useSelector(state => state.currentUser);

  const getMentors = () => {
    const body = {"query": "{mentors{id name email mentor profile {gender aboutMe image fieldOfInterest} mentorProfile {fieldOfKnowledge experienceLevel workDayQuestion enjoymentQuestion teachingPointsQuestion adviceQuestion} location {city state}}}"};

    const options = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      }
    };

    fetch('https://ican2-be-rails.herokuapp.com/api/v1/graphql', options)
      .then(response => response.json())
      .then(data => {
        dispatch(loadMentors(data.data.mentors.filter(mentor => mentor.id != currentUser.id)));
        setIsLoading(false);
      })
    };

  const displayMentors = () => {
    return mentors.map(mentor => <MentorCard mentor={mentor} />)
  }

  useEffect(() => getMentors(), [])

  return (
    <section className='mentors-container'>
      {isLoading ? <p>Loading...</p> : displayMentors()}
    </section>
  );
}

export default ProfileContainer;
