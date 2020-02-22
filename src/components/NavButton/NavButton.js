import React from 'react';
import { Link } from "react-router-dom";
import './NavButton.scss';

const NavButton = ({ nav, name }) => {

  const checkSelected = () => {
    if (window.location.pathname === nav) {
      return 'selected';
    } else {
      return '';
    };
  };

  return (
    <Link to={nav}>
      <button className={checkSelected()}>
        {name}
      </button>
    </Link>
  );
};

export default NavButton;
