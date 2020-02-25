import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadMessages } from '../../actions';
import { findMatchingMessages } from '../../utils/messagingAPICalls';
import './MessagePreview.scss';

const MessagePreview = ({ otherMessengerId }) => {
  const [otherMessengerName, setOtherMessengerName] = useState('');
  const [otherMessengerPic, setOtherMessengerPic] = useState('');
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.currentUser);

  const findName = () => {
    const body = {"query": "{users(id: \""+ otherMessengerId + "\") {name profile{image}}}"};

    const options = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      }
    };

    return fetch('https://ican2-be-rails.herokuapp.com/api/v1/graphql', options)
      .then(response => response.json())
      .then(data => {
        setOtherMessengerName(data.data.users.name);
        setOtherMessengerPic(data.data.users.profile.image);
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {findName()}, [])

  const findMessages = () => {
    dispatch(loadMessages([]));

    findMatchingMessages(currentUser.id, otherMessengerId)
      .then(data => dispatch(loadMessages({
        otherMessenger: {
          id: otherMessengerId,
          name: otherMessengerName,
          pic: otherMessengerPic
        },
        messages: data.data.messages
      })))
      .catch(error => console.log(error))
  }

  return (
    <section className='message-preview'>
      {otherMessengerName &&
        <>
          <img src={otherMessengerPic} />
          <Link to={`/messages/${otherMessengerId}`}>
            <button onClick={() => findMessages()}>message {otherMessengerName.toLowerCase()}</button>
          </Link>
        </>
      }
    </section>
  );
}

export default MessagePreview;
