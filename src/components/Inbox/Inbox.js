import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './Inbox.scss';
import MessagePreview from '../MessagePreview/MessagePreview';

const Inbox = () => {
  const [conversations, setConversations] = useState([]);
  const currentUser = useSelector(state => state.currentUser);

  const checkForMessages = () => {
    const body = {"query": "{conversations(userId: \""+ currentUser.id + "\") {senderId recipientId}}"};

    const options = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      }
    };

    fetch('https://ican2-be-rails.herokuapp.com/api/v1/graphql', options)
      .then(response => response.json())
      .then(data => {
        setConversations(data.data.conversations)
      })
      .catch(error => console.log(error))
  }

  useEffect(() => checkForMessages(), [])

  const renderPreviews = () => {
    return conversations.map(conversation => {
      let otherMessenger;
      if (conversation.senderId === currentUser.id) {
        otherMessenger = conversation.recipientId;
      } else {
        otherMessenger = conversation.senderId;
      }
      return <MessagePreview otherMessenger={otherMessenger}/>
    })
  }

  return (
    <section className='inbox'>
      {renderPreviews()}
    </section>
  );
}

export default Inbox;
