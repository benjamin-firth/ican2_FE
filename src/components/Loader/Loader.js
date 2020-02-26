import React from 'react';
import './Loader.scss';
import PropTypes from 'prop-types';

const Loader = ({ message }) => {

  return (
    <section className='loader-container'>
      <h5>{message}</h5>
    </section>
  );
};

Loader.propTypes = {
  message: PropTypes.string
}

export default Loader;
