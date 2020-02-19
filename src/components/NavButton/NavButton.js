import React from 'react';
import { Link } from 'react-router-dom';
import './NavButton.scss';

const NavButton = ({ nav, name }) => {

  return (
    <Link to={nav}>
      <button>
        {name}
      </button>
    </Link>
  );
}

export default NavButton;
