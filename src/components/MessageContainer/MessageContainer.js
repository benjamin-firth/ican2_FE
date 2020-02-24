import React from 'react';
import './MessageContainer.scss';
import Message from '../Message/Message';
import MessageForm from '../MessageForm/MessageForm';

const MessageContainer = ({ recipient }) => {

  return (
    <section className='message-container'>
      <p>This is a message container between you and {recipient.name}</p>
      <Message />
      <Message />
      <MessageForm recipient={recipient}/>
    </section>
  );
}

export default MessageContainer;
