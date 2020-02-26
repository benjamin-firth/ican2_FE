import React from 'react';
import { useSelector } from 'react-redux';
import { showMessage } from '../../utils/methods';
import './Message.scss';
import PropTypes from 'prop-types';

const Message = ({ message }) => {
  const state = useSelector(state => state);
  const currentUser = state.currentUser;
  const otherMessenger = state.messages.otherMessenger;

  return (
    showMessage(message, otherMessenger, currentUser)
  );
};

Message.propTypes = {
  message: PropTypes.object
}

export default Message;
