import React from 'react';
import './LoginForm.scss';

const LoginForm = () => {

  return (
    <section className='login-page'>
      <form className='login-form'>
        <div>
          <p>USERNAME</p>
          <input type='text' />
        </div>
        <div>
          <p>PASSWORD</p>
          <input type='text' />
        </div>
        <button className='login-submit-button'>enter</button>
      </form>
    </section>
  );
}

export default LoginForm;
