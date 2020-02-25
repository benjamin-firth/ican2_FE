import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../utils/apiCalls';
import { loadMessages, addMessage } from '../../actions';
import './MessageForm.scss';

const MessageForm = ({ otherMessenger }) => {
  const currentUser = useSelector(state => state.currentUser);
  const dispatch = useDispatch();
  const [messageToSend, setMessageToSend] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();

    const body = {
      query: "mutation {\n createMessage(input: {\n senderId: \"" + currentUser.id + "\"\n recipientId: \"" + otherMessenger.id + "\"\n body: \"" + messageToSend + "\"\n}) {\n message {\n body \n userId\n conversation {\n recipientId\n }\n }\n }\n }",
      variables: {}
    };

    fetchData(body)
    .then (data => dispatch(addMessage(data.data.createMessage.message)))
    .catch(error => console.log(error))
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
    .catch(error => console.log(error))
  }

  useEffect(() => loadMessages(), []);

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
