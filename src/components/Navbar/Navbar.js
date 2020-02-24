import React from 'react';
import './Navbar.scss';
import NavButton from '../NavButton/NavButton';
import simpleLogo from '../../images/simple-logo.png';

const Navbar = () => {
  const buttons = [{nav: '/mentors', name: 'find mentors'}, {nav: '/messages', name: 'messages'}, {nav: '/meetups', name: 'meetups'}, {nav: '/myprofile', name: 'my profile'}, {nav: '/', name: 'log out'}];

  const renderButtons = () => {
    return buttons.map(button => (
      <NavButton nav={button.nav} name={button.name} />
    ))
  }

  return (
    <nav className='main-nav'>
      <img src={simpleLogo} />
      <div className='nav-button-container'>
        {renderButtons()}
      </div>
    </nav>
  );
}

export default Navbar;
