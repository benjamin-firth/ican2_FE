import React from 'react';
import { useSelector } from 'react-redux';
import './Message.scss';

const Message = ({ message }) => {
  const state = useSelector(state => state);
  const currentUser = state.currentUser;
  const otherMessenger = state.messages.otherMessenger;

  const showMessage = () => {
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

  return (
    showMessage()
  );
}

export default Message;
