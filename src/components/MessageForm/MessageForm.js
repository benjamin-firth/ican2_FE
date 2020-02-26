import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../utils/apiCalls';
import { loadMessages, addMessage } from '../../actions';
import './MessageForm.scss';
import PropTypes from 'prop-types';

const MessageForm = ({ otherMessenger }) => {
  const currentUser = useSelector(state => state.currentUser);
  const dispatch = useDispatch();
  const [messageToSend, setMessageToSend] = useState('');

  const sendMessage = () => {

    const body = {
      query: "mutation {\n createMessage(input: {\n senderId: \"" + currentUser.id + "\"\n recipientId: \"" + otherMessenger.id + "\"\n body: \"" + messageToSend + "\"\n}) {\n message {\n body \n userId\n conversation {\n recipientId\n }\n }\n }\n }",
      variables: {}
    };

    fetchData(body)
      .then (data => dispatch(addMessage(data.data.createMessage.message)))
      .catch(error => error)
    setMessageToSend('');
  };

  const loadMessages = () => {
    fetchData({"query": "{messages(sender: \""+ currentUser.id + "\", recipient: \""+ otherMessenger.id + "\") {body read userId}}"})
    .then(data => dispatch(loadMessages({
      otherMessenger: {
        id: otherMessenger.id,
        name: otherMessenger.name,
        pic: otherMessenger.pic
      },
      messages: data.data.messages
    })))
    .catch(error => error)
  }

  useEffect(() => loadMessages(), []);

  return (
    <div className='message-form-container'>
      <p className='new-message-tag'>new message:</p>
      <form type="reset" className='message-form'>
        <textarea id='stateMessageToSend' value={messageToSend} onChange={e => setMessageToSend(e.target.value)} />
        <button type='button' id='messageButton' onClick={() => sendMessage()}>send message</button>
      </form>
    </div>
  );
}

MessageForm.propTypes = {
  otherMessenger: PropTypes.object
}

export default MessageForm;
