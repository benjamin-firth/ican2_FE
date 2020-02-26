import React from 'react';
import NavButton from '../components/NavButton/NavButton';
import MessagePreview from '../components/MessagePreview/MessagePreview';
import MentorCard from '../components/MentorCard/MentorCard';
import { fetchData } from './apiCalls';

export const renderButtons = buttons => {
  return buttons.map(button => (
    <NavButton nav={button.nav} name={button.name} key={button.name}/>
  ))
}

export const renderPreviews = (conversations, id) => {
  return conversations.map(conversation => {
    let otherMessengerId;
    if (conversation.senderId === id) {
      otherMessengerId = conversation.recipientId;
    } else {
      otherMessengerId = conversation.senderId;
    }
    return <MessagePreview otherMessengerId={otherMessengerId}/>
  })
}

export const getUser = email => {
  const body = {"query": "{users(email: \""+ email + "\") {id name email mentor profile {gender aboutMe image fieldOfInterest} mentorProfile {fieldOfKnowledge experienceLevel workDayQuestion enjoymentQuestion teachingPointsQuestion adviceQuestion} location {city state}}}"};

  return fetchData(body);
};

export const showMessage = (message, otherMessenger, currentUser) => {
  if (message.userId === otherMessenger.id) {
    return (
      <section className='message other'>
        <img src={otherMessenger.pic} />
        <p>{message.body}</p>
      </section>
    )
  } else {
    return (
      <section className='message sender'>
        <p>{message.body}</p>
        <img src={currentUser.profile.image} />
      </section>
    )
  }
}

export const checkSelected = (url, nav) => {
  if (url === nav) {
    return 'selected';
  } else {
    return '';
  };
};

export const displayMentors = mentors => {
  return mentors.map(mentor => <MentorCard mentor={mentor} />)
}
export const filterPeople = (mentors, field, state, name) => {
  let firstFilter = mentors;

  if (field) {
    firstFilter = mentors.filter(mentor => mentor.mentorProfile.fieldOfKnowledge === field);
  };

  let secondFilter = firstFilter;

  if (state) {
    secondFilter = firstFilter.filter(mentor => mentor.location.state === state);
  };

  let thirdFilter = secondFilter;

  if (name) {
    thirdFilter = secondFilter.filter(mentor => mentor.name.toLowerCase().includes(name.toLowerCase()));
  };

  return thirdFilter;
}
