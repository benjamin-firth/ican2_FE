import React from 'react';
import './MessagePreview.scss';

const MessagePreview = ({ participants }) => {

  return (
    <form>
      <p>This a message between {participants.senderId} and {participants.recipientId}.</p>
    </form>
  );
}

export default MessagePreview;
