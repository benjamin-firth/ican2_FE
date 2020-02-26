import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterMentors } from '../../actions';
import './FilterBox.scss';

const FilterBox = () => {
  const dispatch = useDispatch();
  const [fieldFilter, setFieldFilter] = useState('');
  const mentors = useSelector(state => state.mentors);

  const findMentors = e => {
    e.preventDefault();
    let filteredMentors = mentors.filter(mentor => mentor.mentorProfile.fieldOfKnowledge === fieldFilter);
    dispatch(filterMentors(filteredMentors));
  }

  return (
    <form className='filter-container'>
    <p>Filter mentors:</p>
      <select
        className='select-box'
        onChange={(e) => setFieldFilter(e.target.value)}
      >
        <option value=''>Any Career Field</option>
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
      <button onClick={e => findMentors(e)}>apply filter(s)</button>
    </form>
  );
}

export default FilterBox;
