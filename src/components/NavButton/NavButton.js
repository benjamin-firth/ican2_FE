import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { checkSelected } from '../../utils/methods';
import './NavButton.scss';
import { logoutCurrentUser } from '../../actions';

const NavButton = ({ nav, name }) => {
  const dispatch = useDispatch();

  const logOut = () => {
    if (name === 'log out') {
      dispatch(logoutCurrentUser());
    }
  }

  return (
    <Link to={nav}>
      <button className={checkSelected(window.location.pathname, nav)} onClick={() => logOut()}>
        {name}
      </button>
    </Link>
  );
};

export default NavButton;
