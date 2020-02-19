import React from 'react';
import './Splash.scss';
import { Link } from 'react-router-dom';

const Splash = () => {

  return (
    <section className='splash-container'>
      <button className='login-button'>log in</button>
      <button className='sign-up-button'>sign up</button>
      <Link to='/about'>learn more</Link>
    </section>
  );
}

export default Splash;
