import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchData } from '../../utils/apiCalls';
import './Inbox.scss';
import MessagePreview from '../MessagePreview/MessagePreview';

const Inbox = () => {
  const [conversations, setConversations] = useState([]);
  const currentUser = useSelector(state => state.currentUser);

  const checkForMessages = () => {
    const body = {"query": "{conversations(userId: \""+ currentUser.id + "\") {senderId recipientId}}"};

    fetchData(body)
    .then(data => {
      setConversations(data.data.conversations)
    })
    .catch(error => error)
  }

  useEffect(() => checkForMessages(), [])

  const renderPreviews = () => {
    return conversations.map(conversation => {
      let otherMessengerId;
      if (conversation.senderId === currentUser.id) {
        otherMessengerId = conversation.recipientId;
      } else {
        otherMessengerId = conversation.senderId;
      }
      return <MessagePreview otherMessengerId={otherMessengerId}/>
    })
  }

  return (
    <section className='inbox'>
      <h3>you have chats open with:</h3>
      <div className='preview-container'>
        {renderPreviews()}
      </div>
    </section>
  );
}

export default Inbox;
