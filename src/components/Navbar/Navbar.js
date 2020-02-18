import React from 'react';
import './Navbar.scss';

const Navbar = () => {

  return (
    <nav>
      <div className="three col">
        <div className="hamburger" id="hamburger-1">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;