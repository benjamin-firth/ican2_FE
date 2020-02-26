import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterMentors } from '../../actions';
import './FilterBox.scss';

const FilterBox = () => {
  const dispatch = useDispatch();
  const mentors = useSelector(state => state.mentors);
  const [field, setField] = useState('');
  const [state, setState] = useState('');

  const findMentors = () => {
    let firstFilter = mentors;


    if (field) {
      firstFilter = mentors.filter(mentor => mentor.mentorProfile.fieldOfKnowledge === field);
    };

    let secondFilter = firstFilter;

    if (state) {
      secondFilter = firstFilter.filter(mentor => mentor.location.state === state);
    };

    dispatch(filterMentors(secondFilter));

    if (!field && !state) {
      dispatch(filterMentors(mentors));
    }
  }

  useEffect(() => findMentors(), [field, state]);

  return (
    <form className='filter-container'>
    <p>Filter mentors:</p>
      <select
        className='select-box'
        onChange={e => setField(e.target.value)}
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
      <select
        className='select-box'
        onChange={e => setState(e.target.value)}
      >
        <option value=''>Any State</option>
        <option value='AL'>Alabama</option>
        <option value='AK'>Alaska</option>
        <option value='AZ'>Arizona</option>
        <option value='AR'>Arkansas</option>
        <option value='CA'>California</option>
        <option value='CO'>Colorado</option>
        <option value='CT'>Connecticut</option>
        <option value='DE'>Delaware</option>
        <option value='FL'>Florida</option>
        <option value='GA'>Georgia</option>
        <option value='HI'>Hawaii</option>
        <option value='ID'>Idaho</option>
        <option value='IL'>Illinois</option>
        <option value='IN'>Indiana</option>
        <option value='IA'>Iowa</option>
        <option value='KS'>Kansas</option>
        <option value='KY'>Kentucky</option>
        <option value='LA'>Louisiana</option>
        <option value='ME'>Maine</option>
        <option value='MD'>Maryland</option>
        <option value='MA'>Massachusetts</option>
        <option value='MI'>Michigan</option>
        <option value='MN'>Minnesota</option>
        <option value='MS'>Mississippi</option>
        <option value='MO'>Missouri</option>
        <option value='MT'>Montana</option>
        <option value='NE'>Nebraska</option>
        <option value='NV'>Nevada</option>
        <option value='NH'>New Hampshire</option>
        <option value='NJ'>New Jersey</option>
        <option value='NM'>New Mexico</option>
        <option value='NY'>New York</option>
        <option value='NC'>North Carolina</option>
        <option value='ND'>North Dakota</option>
        <option value='OH'>Ohio</option>
        <option value='OK'>Oklahoma</option>
        <option value='OR'>Oregon</option>
        <option value='PA'>Pennsylvania</option>
        <option value='RI'>Rhode Island</option>
        <option value='SC'>South Carolina</option>
        <option value='SD'>South Dakota</option>
        <option value='TN'>Tennessee</option>
        <option value='TX'>Texas</option>
        <option value='UT'>Utah</option>
        <option value='VT'>Vermont</option>
        <option value='VA'>Virginia</option>
        <option value='WA'>Washington</option>
        <option value='WV'>West Virginia</option>
        <option value='WI'>Wisconsin</option>
        <option value='WY'>Wyoming</option>
      </select>
    </form>
  );
}

export default FilterBox;
