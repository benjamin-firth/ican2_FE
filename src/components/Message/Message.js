import React from 'react';
import './Message.scss';

const Message = ({ message }) => {
console.log(message);

  return (
    <section>
      <p>{message.body}</p>
    </section>
  );
}

export default Message;
