import React from 'react';
import './MessagePreview.scss';

const MessagePreview = ({ otherMessenger }) => {

  return (
    <form>
      <p>This a message between you and {otherMessenger}.</p>
    </form>
  );
}

export default MessagePreview;
