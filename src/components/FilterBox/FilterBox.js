import React, { useState } from 'react';
import './FilterBox.scss';

const FilterBox = () => {
  const [fieldFilter, setFieldFilter] = useState('');
  window.scrollTo(0, 0);

  return (
    <form className='filter-container'>
    <p>Filter mentors by:</p>
      <select
        className='select-box'
        onChange={(e) => setFieldFilter(e.target.value)}
      >
        <option value=''>Career Field</option>
        <option value='Agriculture'>Agriculture</option>
        <option value='Biology'>Biology</option>
        <option value='Botany'>Botany</option>
        <option value='Business/finance'>Business/Finance</option>
        <option value='Business/marketing'>Business/Marketing</option>
        <option value='Chemistry'>Chemistry</option>
        <option value='Construction'>Construction</option>
        <option value='Education'>Education</option>
        <option value='Fine arts'>Fine Arts</option>
        <option value='Law/legal'>Law/Legal</option>
        <option value='Law enforcement'>Law Enforcement</option>
        <option value='Medicine'>Medicine</option>
        <option value='Restaurateur/Chef'>Restaurateur/Chef</option>
        <option value='Software Development'>Software Development</option>
        <option value='Other'>Other</option>
      </select>
    </form>
  );
}

export default FilterBox;
