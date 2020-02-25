import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './MessageForm.scss';

const MessageForm = ({ recipient }) => {
  const currentUser = useSelector(state => state.currentUser);
  const [messageToSend, setMessageToSend] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();

    const mutation = {
      query: "mutation {\n createMessage(input: {\n senderId: \"" + currentUser.id + "\"\n recipientId: \"" + recipient.id + "\"\n body: \"" + messageToSend + "\"\n}) {\n message {\n body \n userId\n conversation {\n recipientId\n }\n }\n }\n }",
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

  return (
    <form>
      <input type='text' onChange={e => setMessageToSend(e.target.value)}/>
      <button onClick={e => sendMessage(e)}>send message</button>
    </form>
  );
}

export default MessageForm;
