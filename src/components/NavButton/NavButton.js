import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import './NavButton.scss';
import { logoutCurrentUser } from '../../actions';

const NavButton = ({ nav, name }) => {
  const dispatch = useDispatch();

  const checkSelected = () => {
    if (window.location.pathname === nav) {
      return 'selected';
    } else {
      return '';
    };
  };

  const logOut = () => {
    if (name === 'log out') {
      dispatch(logoutCurrentUser());
    }
  }

  return (
    <Link to={nav}>
      <button className={checkSelected()} onClick={logOut()}>
        {name}
      </button>
    </Link>
  );
};

export default NavButton;
