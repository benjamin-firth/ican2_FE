import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadMessages } from '../../actions';
import { fetchData } from '../../utils/apiCalls';
import './MessagePreview.scss';
import PropTypes from 'prop-types';

export const findMessenger = (otherMessengerId, setOtherMessengerName, setOtherMessengerPic) => {
  const body = {"query": "{users(id: \""+ otherMessengerId + "\") {name profile{image}}}"};

  fetchData(body)
    .then(data => {
      setOtherMessengerName(data.data.users.name);
      setOtherMessengerPic(data.data.users.profile.image);
    })
    .catch(error => console.log(error))
}
export const findMessages = (dispatch, currentUser, otherMessengerId, otherMessengerName, otherMessengerPic) => {
  dispatch(loadMessages([]));

  const body = {"query": "{messages(sender: \""+ currentUser.id + "\", recipient: \""+ otherMessengerId + "\") {body read userId}}"}

  fetchData(body)
    .then(data => dispatch(loadMessages({
      otherMessenger: {
        id: otherMessengerId,
        name: otherMessengerName,
        pic: otherMessengerPic
      },
      messages: data.data.messages
    })))
    .catch(error => console.log(error))
};

const MessagePreview = ({ otherMessengerId }) => {
  const [otherMessengerName, setOtherMessengerName] = useState('');
  const [otherMessengerPic, setOtherMessengerPic] = useState('');
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.currentUser);


  useEffect(() => {findMessenger(otherMessengerId, setOtherMessengerName, setOtherMessengerPic)}, [otherMessengerId])


  return (
    <section className='message-preview'>
      {otherMessengerName &&
        <>
          <img src={otherMessengerPic} />
          <Link to={`/messages/${otherMessengerId}`}>
            <button onClick={() => findMessages(dispatch, currentUser, otherMessengerId, otherMessengerName, setOtherMessengerPic)}>message {otherMessengerName.toLowerCase()}</button>
          </Link>
        </>
      }
    </section>
  );
}

MessagePreview.propTypes = {
  otherMessengerId: PropTypes.number
}

export default MessagePreview;
