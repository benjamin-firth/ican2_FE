import React from 'react';
import { useSelector } from 'react-redux';
import './MessageContainer.scss';
import Message from '../Message/Message';
import MessageForm from '../MessageForm/MessageForm';

const MessageContainer = () => {
  const messages = useSelector(state => state.messages.messages);
  const otherMessenger = useSelector(state => state.messages.otherMessenger);

  const renderMessages = () => {
    return messages.map(message => <Message message={message} />)
  }

  return (
    otherMessenger ?
    <section className='message-container'>
      <h3>Messages between you and {otherMessenger.name}:</h3>
      {renderMessages()}
    </section> :
    <p>loading</p>
  );
}

export default MessageContainer;
