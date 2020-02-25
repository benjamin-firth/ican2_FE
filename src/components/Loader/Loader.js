import React from 'react';
import './Loader.scss';

const Loader = ({ message }) => {

  return (
    <section className='loader-container'>
      <h5>{message}</h5>
    </section>
  );
}

export default Loader;
