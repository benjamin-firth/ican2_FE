import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchData } from '../../utils/apiCalls';
import { loginCurrentUser } from '../../actions';
import Loader from '../Loader/Loader';
import './LoginForm.scss';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const currentUser = useSelector(state => state.currentUser);

  window.scrollTo(0, 0);

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
    setIsLoading(true);
    if (!email.length || !password.length) {
      setError('Please be sure you have filled out all sections.');
      setIsLoading(false);
    } else if (!email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address.');
      setIsLoading(false);
    } else {
      getUser()
      .then(data => {
        dispatch(loginCurrentUser(data.data.users));
        setIsLoading(false);
      })
      .catch(error => setError('That user does not exist. Please sign up!'))
    }
  }

  const getUser = () => {
    const body = {"query": "{users(email: \""+ email + "\") {id name email mentor profile {gender aboutMe image fieldOfInterest} mentorProfile {fieldOfKnowledge experienceLevel workDayQuestion enjoymentQuestion teachingPointsQuestion adviceQuestion} location {city state}}}"};

    return fetchData(body);
  };

  return (
    currentUser.name ? <Redirect to='myprofile' /> :
    isLoading ? <Loader message='loading your profile...'/> :
    <section className='login-page'>
      <form className='login-form'>
        <div key={1}>
          <p>EMAIL</p>
          <input type='text' onChange={(e) => enterEmail(e)}/>
        </div>
        <div key={2}>
          <p>PASSWORD</p>
          <input type='text' type='password' onChange={(e) => enterPassword(e)}/>
        </div>
        {error && <p className='error-msg'>{error}</p>}
        <button className='login-submit-button' onClick={(e) => login(e)}>enter</button>
      </form>
    </section>
  );
}

export default LoginForm;
