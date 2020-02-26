import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadMentors } from '../../actions';
import { fetchData } from '../../utils/apiCalls';
import { displayMentors } from '../../utils/methods';

import './ProfileContainer.scss';
import MentorCard from '../MentorCard/MentorCard';
import Loader from '../Loader/Loader';

const ProfileContainer = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const mentors = useSelector(state => state.mentors);
  const currentUser = useSelector(state => state.currentUser);

  const getMentors = () => {
    const body = {"query": "{mentors{id name email mentor profile {gender aboutMe image fieldOfInterest} mentorProfile {fieldOfKnowledge experienceLevel workDayQuestion enjoymentQuestion teachingPointsQuestion adviceQuestion} location {city state}}}"};

    fetchData(body)
      .then(data => {
        dispatch(loadMentors(data.data.mentors.filter(mentor => mentor.id != currentUser.id)));
        setIsLoading(false);
      })
  };

  useEffect(() => getMentors(), [])

  return (
    <section className='mentors-container'>
      {isLoading ? <Loader message='finding mentors...'/> : displayMentors(mentors)}
    </section>
  );
}

export default ProfileContainer;
