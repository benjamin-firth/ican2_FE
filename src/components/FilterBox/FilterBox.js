import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterMentors } from '../../actions';
import './FilterBox.scss';

const FilterBox = () => {
  const dispatch = useDispatch();
  const mentors = useSelector(state => state.mentors);
  const [field, setField] = useState('');
  const [state, setState] = useState('');
  const [name, setName] = useState('');

  const findMentors = () => {
    let firstFilter = mentors;

    if (field) {
      firstFilter = mentors.filter(mentor => mentor.mentorProfile.fieldOfKnowledge === field);
    };

    let secondFilter = firstFilter;

    if (state) {
      secondFilter = firstFilter.filter(mentor => mentor.location.state === state);
    };

    let thirdFilter = secondFilter;

    console.log('second', secondFilter);
    console.log('third', thirdFilter);

    if (name) {
      thirdFilter = secondFilter.filter(mentor => mentor.name.toLowerCase().includes(name.toLowerCase()));
    };

    dispatch(filterMentors(thirdFilter));

    if (!field && !state && !name) {
      dispatch(filterMentors(mentors));
    }
  }

  useEffect(() => findMentors(), [field, state, name]);

  return (
    <form className='filter-container'>
    <p>filter mentors:</p>
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
        <option value='Alabama'>Alabama</option>
        <option value='Alaska'>Alaska</option>
        <option value='Arizona'>Arizona</option>
        <option value='Arkansas'>Arkansas</option>
        <option value='California'>California</option>
        <option value='Colorado'>Colorado</option>
        <option value='Connecticut'>Connecticut</option>
        <option value='Delaware'>Delaware</option>
        <option value='Florida'>Florida</option>
        <option value='Georgia'>Georgia</option>
        <option value='Hawaii'>Hawaii</option>
        <option value='Idaho'>Idaho</option>
        <option value='Illinois'>Illinois</option>
        <option value='Indiana'>Indiana</option>
        <option value='Iowa'>Iowa</option>
        <option value='Kansas'>Kansas</option>
        <option value='Kentucky'>Kentucky</option>
        <option value='Louisiana'>Louisiana</option>
        <option value='Maine'>Maine</option>
        <option value='Maryland'>Maryland</option>
        <option value='Massachusetts'>Massachusetts</option>
        <option value='Michigan'>Michigan</option>
        <option value='Minnesota'>Minnesota</option>
        <option value='Mississippi'>Mississippi</option>
        <option value='Missouri'>Missouri</option>
        <option value='Montana'>Montana</option>
        <option value='Nebraska'>Nebraska</option>
        <option value='Nevada'>Nevada</option>
        <option value='New Hampshire'>New Hampshire</option>
        <option value='New Jersey'>New Jersey</option>
        <option value='New Mexico'>New Mexico</option>
        <option value='New York'>New York</option>
        <option value='North Carolina'>North Carolina</option>
        <option value='North Dakota'>North Dakota</option>
        <option value='Ohio'>Ohio</option>
        <option value='Oklahoma'>Oklahoma</option>
        <option value='Oregon'>Oregon</option>
        <option value='Pennsylvania'>Pennsylvania</option>
        <option value='Rhode Island'>Rhode Island</option>
        <option value='South Carolina'>South Carolina</option>
        <option value='South Dakota'>South Dakota</option>
        <option value='Tennessee'>Tennessee</option>
        <option value='Texas'>Texas</option>
        <option value='Utah'>Utah</option>
        <option value='Vermont'>Vermont</option>
        <option value='Virginia'>Virginia</option>
        <option value='Washington'>Washington</option>
        <option value='West Virginia'>West Virginia</option>
        <option value='Wisconsin'>Wisconsin</option>
        <option value='Wyoming'>Wyoming</option>
      </select>
      <input type='textbox' placeholder='Search by Mentor Name...' onChange={e => setName(e.target.value)}/>
    </form>
  );
}

export default FilterBox;
