import React from 'react';
import './BeginNavbar.scss';
import NavButton from '../NavButton/NavButton';
import largeLogo from '../../images/large-logo.png';

const BeginNavbar = () => {
  const buttons = [{nav: '/signup', name: 'sign up'}, {nav: '/login', name: 'log in'}];

  const renderButtons = () => {
    return buttons.map(button => (
      <NavButton nav={button.nav} name={button.name} />
    ))
  }

  return (
    <nav className='begin-nav'>
      <img className='large-logo' src={largeLogo} />
      <div className='nav-button-container'>
        {renderButtons()}
      </div>
    </nav>
  );
}

export default BeginNavbar;
