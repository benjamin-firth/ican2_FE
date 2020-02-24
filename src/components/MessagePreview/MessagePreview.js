import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadMessages } from '../../actions';
import './MessagePreview.scss';

const MessagePreview = ({ otherMessengerId }) => {
  const [otherMessengerName, setOtherMessengerName] = useState('');
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.currentUser);

  const findName = () => {
    const body = {"query": "{users(id: \""+ otherMessengerId + "\") {name}}"};

    const options = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      }
    };

    return fetch('https://ican2-be-rails.herokuapp.com/api/v1/graphql', options)
      .then(response => response.json())
      .then(data => setOtherMessengerName(data.data.users.name))
      .catch(error => console.log(error))
  }

  useEffect(() => findName(), [])

  const findMessages = () => {
    const body = {"query": "{messages(sender: \""+ currentUser.id + "\", recipient: \""+ otherMessengerId + "\") {body read userId}}"};

    const options = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      }
    };

    return fetch('https://ican2-be-rails.herokuapp.com/api/v1/graphql', options)
      .then(response => response.json())
      .then(data => dispatch(loadMessages((data.data.messages))))
      .catch(error => console.log(error))
  }

  return (
    <form>
      {otherMessengerName &&
        <>
          <p>This a message between you and {otherMessengerName}.</p>
          <Link to={`messages/${otherMessengerId}`}>
            <button onClick={() => findMessages()}>message</button>
          </Link>
        </>
      }
    </form>
  );
}

export default MessagePreview;
