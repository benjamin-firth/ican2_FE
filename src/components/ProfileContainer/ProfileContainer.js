import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadMentors } from '../../actions';
import { fetchData } from '../../utils/apiCalls';
import { displayMentors } from '../../utils/methods';
import './ProfileContainer.scss';
import MentorCard from '../MentorCard/MentorCard';
import Loader from '../Loader/Loader';
import FilterBox from '../FilterBox/FilterBox';

const ProfileContainer = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const filteredMentors = useSelector(state => state.filteredMentors);
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
      {isLoading ?
        <Loader message='finding mentors...'/> :
        <>
        <FilterBox />
        <div className='mentor-cards-container'>
          {filteredMentors.length ? displayMentors(filteredMentors) : <p className='no-match-msg'>There are no mentors that match your search. Please adjust the filters.</p>}
        </div>
        </>
      }
    </section>
  );
}

export default ProfileContainer;
