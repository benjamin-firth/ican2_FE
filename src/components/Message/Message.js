import React from 'react';
import { useSelector } from 'react-redux';
import './Message.scss';

const Message = ({ message }) => {
  const currentUser = useSelector(state => state.currentUser);
  const otherMessenger = useSelector(state => state.messages.otherMessenger);

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
