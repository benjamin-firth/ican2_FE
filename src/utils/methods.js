import React from 'react';
import NavButton from '../components/NavButton/NavButton';
import MessagePreview from '../components/MessagePreview/MessagePreview';
import { fetchData } from './apiCalls';


export const renderButtons = buttons => {
  return buttons.map(button => (
    <NavButton nav={button.nav} name={button.name} key={button.name}/>
  ))
}

export const checkForMessages = (id) => {
  const body = {"query": "{conversations(userId: \""+ id + "\") {senderId recipientId}}"};

  return fetchData(body);
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
