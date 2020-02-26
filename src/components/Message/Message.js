import React from 'react';
import { useSelector } from 'react-redux';
import { showMessage } from '../../utils/methods';
import './Message.scss';

const Message = ({ message }) => {
  const state = useSelector(state => state);
  const currentUser = state.currentUser;
  const otherMessenger = state.messages.otherMessenger;

  return (
    showMessage(message, otherMessenger, currentUser)
  );
};

export default Message;
