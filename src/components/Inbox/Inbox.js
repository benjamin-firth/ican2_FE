import React from 'react';
import './Inbox.scss';
import MessagePreview from '../MessagePreview/MessagePreview';

const Inbox = () => {
  return (
    <section className='inbox'>
      <MessagePreview />
      <MessagePreview />
    </section>
  );
}

export default Inbox;
