import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../utils/apiCalls';
import { loadMessages } from '../../actions';
import './UserProfile.scss';
import PropTypes from 'prop-types';

const UserProfile = ({ user }) => {
  const currentUser = useSelector(state => state.currentUser);
  const dispatch = useDispatch();

  window.scrollTo(0, 0);

  const getMessages = () => {
    dispatch(loadMessages({}));

    const body = {"query": "{messages(sender: \""+ currentUser.id + "\", recipient: \""+ user.id + "\") {body read userId}}"}

    fetchData(body)
    .then(data => dispatch(loadMessages({
      otherMessenger: {
        id: user.id,
        name: user.name,
        pic: user.profile.image
      },
      messages: data.data.messages
    })))
    .catch(error => dispatch(loadMessages({
      otherMessenger: {
        id: user.id,
        name: user.name,
        pic: user.profile.image
      },
      messages: []
    })))
  }

  return (
    <section className='user-profile-container'>
      <section className='user-profile'>
        <div className='user-general-info'>
          <div className='user-image-container'>
            <img
              src={user.profile.image}
              alt='profile picture'
              className='profile-photo'/>
            {user.id === currentUser.id ? null : <Link to={`/messages/${user.id}`}><button id='getMessageButton' onClick={() => getMessages()}>message</button></Link>}
          </div>
          <section className='user-description-container'>
            <h2>{user.name.toLowerCase()}</h2>
            {user.mentor && <h3>{user.mentorProfile.fieldOfKnowledge}</h3>}
            {user.profile.gender !== 'none-specified' ? <p>{user.location.city}, {user.location.state} | {user.profile.gender}</p> : <p>{user.location.city}, {user.location.state}</p>}
            <p>{user.profile.aboutMe}</p>
          </section>
        </div>
        {user.mentor &&
          <section className='mentor-questions-container'>
            <h4>EXPERIENCE LEVEL</h4>
            <p>{user.mentorProfile.experienceLevel}</p>
            <h4>DESCRIBE A TYPICAL DAY AT WORK.</h4>
            <p>{user.mentorProfile.workDayQuestion}</p>
            <h4>WHAT DO YOU ENJOY MOST ABOUT YOUR WORK?</h4>
            <p>{user.mentorProfile.enjoymentQuestion}</p>
            <h4>WHAT DO YOU FEEL THE MOST EXCITED ABOUT TEACHING OTHERS?</h4>
            <p>{user.mentorProfile.teachingPointsQuestion}</p>
            <h4>WHAT IS ONE PIECE OF ADVICE YOU HAVE FOR OTHERS LOOKING TO JOIN THIS FIELD?</h4>
            <p>{user.mentorProfile.adviceQuestion}</p>
          </section>
        }
      </section>
    </section>
  )
}

UserProfile.propTypes = {
  user: PropTypes.object
}

export default UserProfile;
