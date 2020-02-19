import React from 'react';
import './Splash.scss';
import { Link } from 'react-router-dom';

const Splash = () => {

  return (
    <section className='splash-container'>
      <p>welcome! <br /> we are so glad you're here.</p>
      <button className='login-button'>log in</button>
      <button className='sign-up-button'>sign up</button>
      <Link to='/about'>learn more</Link>
    </section>
  );
}

export default Splash;
