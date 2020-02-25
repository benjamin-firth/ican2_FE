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
      <h3>messages between you and {otherMessenger.name.toLowerCase()}:</h3>
      <div className='messages-box'>
        {renderMessages()}
      </div>
      <MessageForm otherMessenger={otherMessenger}/>
    </section> :
    <p>loading</p>
  );
}

export default MessageContainer;
