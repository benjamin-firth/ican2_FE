import React from 'react';
import './Inbox.scss';
import MessagePreview from '../MessagePreview/MessagePreview';

const Inbox = () => {
  return (
    <form>
      <MessagePreview />
      <MessagePreview />
    </form>
  );
}

export default Inbox;
