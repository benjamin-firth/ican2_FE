import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { checkSelected } from '../../utils/methods';
import './MobileNavButton.scss';
import { logoutCurrentUser } from '../../actions';
import PropTypes from 'prop-types';

const MobileNavButton = ({ nav, name }) => {
  const dispatch = useDispatch();

  const logOut = () => {
    if (name === 'log out') {
      dispatch(logoutCurrentUser());
    }
  }

  return (
    <Link to={nav}>
      <button value={name} id='logoutButton' className='mobile-nav-button' onClick={() => logOut()}>
        {name}
      </button>
    </Link>
  );
};

MobileNavButton.propTypes = {
  nav: PropTypes.string,
  name: PropTypes.string
}

export default MobileNavButton;
