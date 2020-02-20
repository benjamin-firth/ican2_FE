import React, { useState } from 'react';
import './LoginForm.scss';

const LoginForm = () => {

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
    } else {
      console.log({ email: email, password: password });
    }
  }

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
