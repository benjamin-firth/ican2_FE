import React, { useState } from 'react';
import './BeginNavbar.scss';
import NavButton from '../NavButton/NavButton';
import MobileNavButton from '../MobileNavButton/MobileNavButton';
import largeLogo from '../../images/large-logo.png';

const BeginNavbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const buttons = [{nav: '/signup', name: 'sign up'}, {nav: '/login', name: 'log in'}];

  const renderButtons = () => {
    return buttons.map(button => (
      <NavButton nav={button.nav} name={button.name} key={button.name} />
    ))
  }

  const renderMobileButtons = () => {
    return buttons.map(button => (
      <MobileNavButton nav={button.nav} name={button.name} key={button.name} />
    ))
  }

  return (
    <nav className='begin-nav'>
      <img className='large-logo' src={largeLogo} />
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

export default BeginNavbar;
