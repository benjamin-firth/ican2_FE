import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchData } from '../../utils/apiCalls';
import { renderPreviews } from '../../utils/methods';
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

  return (
    <section className='inbox'>
      <h3>you have chats open with:</h3>
      <div className='preview-container'>
        {renderPreviews(conversations, currentUser.id)}
      </div>
    </section>
  );
}

export default Inbox;
