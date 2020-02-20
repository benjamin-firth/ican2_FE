import React from 'react';
import './LoginForm.scss';

const LoginForm = () => {

  return (
    <form className='login-form'>
      <p>USERNAME</p>
      <input type='text' />
      <p>PASSWORD</p>
      <input type='text' />
      <button className='login-submit-button'>enter</button>
    </form>
  );
}

export default LoginForm;
