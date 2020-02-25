import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllUserConversations } from '../../utils/messagingAPICalls';
import './Inbox.scss';
import MessagePreview from '../MessagePreview/MessagePreview';

const Inbox = () => {
  const [conversations, setConversations] = useState([]);
  const currentUser = useSelector(state => state.currentUser);

  const checkForMessages = () => {
    getAllUserConversations(currentUser.id)
      .then(data => {
        setConversations(data.data.conversations)
      })
      .catch(error => console.log(error))
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
