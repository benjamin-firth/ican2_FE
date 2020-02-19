import React from 'react';
import './MessageContainer.scss';
import Message from '../Message/Message';
import MessageForm from '../MessageForm/MessageForm';

const MessageContainer = () => {

  return (
    <section>
      <Message />
      <Message />
      <MessageForm />
    </section>
  );
}

export default MessageContainer;
