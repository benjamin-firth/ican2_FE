import React from 'react';
import { useSelector } from 'react-redux';
import './MessageContainer.scss';
import Message from '../Message/Message';
import MessageForm from '../MessageForm/MessageForm';
import Loader from '../Loader/Loader';

const MessageContainer = () => {
  const messageInfo = useSelector(state => state.messages);

  const renderMessages = () => {
    return messageInfo.messages.map(message => <Message key={message.body} message={message} />)
  }

  return (
    messageInfo.otherMessenger ?
    <section className='message-container'>
      <h3>messages between you and {messageInfo.otherMessenger.name.toLowerCase()}:</h3>
      <div className='messages-box'>
        {messageInfo.messages.length ?
            renderMessages() :
          <p>You don't have any messages with {messageInfo.otherMessenger.name} yet. Start the conversation!</p>
        }
      </div>
      <MessageForm otherMessenger={messageInfo.otherMessenger}/>
    </section> :
    <Loader message='Finding your conversation...' />
  );
}

export default MessageContainer;
