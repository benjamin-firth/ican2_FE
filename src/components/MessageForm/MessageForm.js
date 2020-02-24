import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './MessageForm.scss';

const MessageForm = ({ recipient }) => {
  const currentUser = useSelector(state => state.currentUser);

  const sendMessage = () => {
    const mutation = {
      query: `mutation {\n  createMessage(input:  {\n  senderId: "${currentUser.id}"\n recipientId: "${recipient.id}"\n body: "${'Hello. Let\'s start a conversation! Talk to me!'}" }) {\n message }\n `,
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
    });
  }

  return (
    <form>
      <input type='text' />
      <button onClick={sendMessage}>send message</button>
    </form>
  );
}

export default MessageForm;
