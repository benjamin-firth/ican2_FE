import React from 'react';
import './Navbar.scss';
import NavButton from '../NavButton/NavButton';
import simpleLogo from '../../images/simple-logo.png';

const Navbar = ({ buttons }) => {

  const renderButtons = () => {
    return buttons.map(button => (
      <NavButton nav={button.nav} name={button.name} />
    ))
  }

  return (
    <nav>
      <img src={simpleLogo} />
      <div className='nav-button-container'>
        {renderButtons()}
      </div>
    </nav>
  );
}

export default Navbar;
