import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { findMatchingMessages, createMessage } from '../../utils/messagingAPICalls';
import { loadMessages } from '../../actions';
import './MessageForm.scss';

const MessageForm = ({ otherMessenger }) => {
  const currentUser = useSelector(state => state.currentUser);
  const dispatch = useDispatch();
  const [messageToSend, setMessageToSend] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();

    createMessage(otherMessenger.id, currentUser.id, messageToSend)
    .then (data => data.data.createMessage.message)
    .catch(error => console.log(error))
  };

  findMatchingMessages(currentUser.id, otherMessenger.id)
    .then(data => dispatch(loadMessages({
      otherMessenger: {
        id: otherMessenger.id,
        name: otherMessenger.name,
        pic: otherMessenger.pic
      },
      messages: data.data.messages
    })))
    .catch(error => console.log(error))

  return (
    <div>
      <p className='new-message-tag'>new message:</p>
      <form className='message-form'>
        <textarea onChange={e => setMessageToSend(e.target.value)}></textarea>
        <button onClick={e => sendMessage(e)}>send message</button>
      </form>
    </div>
  );
}

export default MessageForm;
