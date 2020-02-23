import React from 'react';
import './MessageContainer.scss';
import Message from '../Message/Message';
import MessageForm from '../MessageForm/MessageForm';

const MessageContainer = ({ other }) => {

  return (
    <section>
      <p>This is a message container between you and {other.name}</p>
      <Message />
      <Message />
      <MessageForm />
    </section>
  );
}

export default MessageContainer;
