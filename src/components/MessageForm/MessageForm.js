import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { findMatchingMessages } from '../../utils/messagingAPICalls';
import { loadMessages } from '../../actions';
import './MessageForm.scss';

const MessageForm = ({ otherMessenger }) => {
  const currentUser = useSelector(state => state.currentUser);
  const dispatch = useDispatch();
  const [messageToSend, setMessageToSend] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();

    const mutation = {
      query: "mutation {\n createMessage(input: {\n senderId: \"" + currentUser.id + "\"\n recipientId: \"" + otherMessenger.id + "\"\n body: \"" + messageToSend + "\"\n}) {\n message {\n body \n userId\n conversation {\n recipientId\n }\n }\n }\n }",
      variables: {}
    };

    const options = {
      method: 'POST',
      body: JSON.stringify(mutation),
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow'
    };

    return fetch('https://ican2-be-rails.herokuapp.com/api/v1/graphql', options)
    .then(response => {
      // if (!response.ok) {
        //   throw Error('error retrieving user data');
        // }
      return response.json();
    })
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
