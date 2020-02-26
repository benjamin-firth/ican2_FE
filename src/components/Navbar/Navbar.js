import React, { useState } from 'react';
import './Navbar.scss';
import NavButton from '../NavButton/NavButton';
import MobileNavButton from '../MobileNavButton/MobileNavButton';
import simpleLogo from '../../images/simple-logo.png';

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const buttons = [{nav: '/mentors', name: 'find mentors'}, {nav: '/messages', name: 'messages'}, {nav: '/myprofile', name: 'my profile'}, {nav: '/', name: 'log out'}];

  const renderButtons = () => {
    return buttons.map(button => (
      <NavButton key={button.name} nav={button.nav} name={button.name} />
    ))
  }

  const renderMobileButtons = () => {
    return buttons.map(button => (
      <MobileNavButton nav={button.nav} name={button.name} key={button.name} />
    ))
  }

  return (
    <nav className='main-nav'>
      <img src={simpleLogo} />
      <div className='nav-button-container'>
        {renderButtons()}
      </div>
      <button className='hamburger' onClick={() => setIsClicked(!isClicked)}></button>
      {isClicked &&
        <div className='mobile-buttons'>
          {renderMobileButtons()}
        </div>}
    </nav>
  );
}

export default Navbar;
