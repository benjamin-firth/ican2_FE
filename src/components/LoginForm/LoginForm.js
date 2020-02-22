import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './LoginForm.scss';
import { addCurrentUser } from '../../actions';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const enterEmail = (e) => {
    setError('');
    setEmail(e.target.value);
  }

  const enterPassword= (e) => {
    setError('');
    setPassword(e.target.value);
  }

  const login = (e) => {
    e.preventDefault();
    if (!email.length || !password.length) {
      setError('Please be sure you have filled out all sections.')
    } else if (!email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address.')
    } else {
      getUser()
      .then(data => dispatch(addCurrentUser(data.data.users)))
      .catch(error => setError('That user does not exist. Please sign up!'))
    }
  }

  const getUser = () => {

  const body = {"query": "{users(email: \""+ email + "\") {name email mentor profile {gender aboutMe image fieldOfInterest} mentorProfile {fieldOfKnowledge experienceLevel workDayQuestion enjoymentQuestion teachingPointsQuestion adviceQuestion} location {city state}}}"};

  const options = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    }
  };

  return fetch('https://ican2-be-rails.herokuapp.com/api/v1/graphql', options)
    .then(response => {
      // if (!response.ok) {
      //   throw Error('error retrieving user data');
      // }
      return response.json();
    })
  };

  return (
    <section className='login-page'>
      <form className='login-form'>
        <div>
          <p>EMAIL</p>
          <input type='text' onChange={(e) => enterEmail(e)}/>
        </div>
        <div>
          <p>PASSWORD</p>
          <input type='text' onChange={(e) => enterPassword(e)}/>
        </div>
        {error && <p className="error-msg">{error}</p>}
        <button className='login-submit-button' onClick={(e) => login(e)}>enter</button>
      </form>
    </section>
  );
}

export default LoginForm;
