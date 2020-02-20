import React from 'react';
import './NavBar.scss';
import NavButton from '../NavButton/NavButton';
import simpleLogo from '../../images/simple-logo.png';

const NavBar = () => {

  return (
    <nav>
      <img src={simpleLogo} />
      <div className='nav-button-container'>
        <NavButton nav='/mentors' name='mentors'/>
        <NavButton nav='/inbox' name='messages'/>
        <NavButton nav='/meetups' name='meetups'/>
        <NavButton nav='/myprofile' name='my profile'/>
        <NavButton nav='/login' name='log out'/>
      </div>
    </nav>
  );
}

export default NavBar;
