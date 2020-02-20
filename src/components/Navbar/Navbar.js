import React from 'react';
import './NavBar.scss';
import NavButton from '../NavButton/NavButton';

const NavBar = () => {

  return (
    <nav>
      <NavButton nav='/mentors' name='mentors'/>
      <NavButton nav='/inbox' name='messages'/>
      <NavButton nav='/meetups' name='meetups'/>
      <NavButton nav='/myprofile' name='my profile'/>
      <NavButton nav='/login' name='log out'/>
    </nav>
  );
}

export default NavBar;
