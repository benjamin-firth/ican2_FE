import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setNewUser } from '../../actions';
import './SignUpForm.scss';

const SignUpForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [field, setField] = useState('');
  const [expertise, setExpertise] = useState('');
  const [mentorBool, setMentorBool] = useState(false);
  const [aboutMe, setAboutMe] = useState('');
  const [gender, setGender] = useState('');
  const [image, setImage] = useState('');
  const [adviceQ, setAdviceQ] = useState('');
  const [enjoyQ, setEnjoyQ] = useState('');
  const [knowledgeField, setknowledgeField] = useState('');
  const [teachingPoints, setTeachingPoints] = useState('');
  const [workDay, setworkDay] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  
  const setUser = () => {
    
    const body = {"query": "{users(email: \""+ email + "\") {name email mentor profile {gender aboutMe image fieldOfInterest} mentorProfile {fieldOfKnowledge experienceLevel workDayQuestion enjoymentQuestion teachingPointsQuestion adviceQuestion} location {city state}}}"};
    
    const options = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      }
    };
    
    return fetch('https://ican2-be-rails.herokuapp.com/api/v1/graphql', options)
    .then(response => {
      // if (!response.ok) {
        //   throw Error('error retrieving user data');
        // }
      return response.json();
    });
  };

  const login = (e) => {
    if (!name.length || !email.length || !location.length || !field.length || !expertise.length || !aboutMe.length || !gender.length || !adviceQ.length || !enjoyQ.length || !knowledgeField.length || !teachingPoints.length || !workDay.length) {
      setError('Please be sure you have filled out all sections.');
      console.log(error);
    } else {
      setUser()
      .then(data => dispatch(setNewUser(data.data.users)))
      .catch(error => setError('That user does not exist. Please sign up!'))
    }
  };

  const clickHandler = (e) => {
    login();
    history.push('/myprofile');
  }

  return (
    <section className='sign-up-container'>
      <h3>build your profile</h3>
      <form className='sign-up-form'>
        <label>WHAT IS YOUR FIRST NAME?</label>
        <input onChange={(e) => setName(e.target.value)}/>
        <label>WHAT IS YOUR EMAIL ADDRESS?</label>
        <input onChange={(e) => setEmail(e.target.value)}/>
        <label>WHAT IS YOUR CURRENT CITY AND STATE?</label>
        <input onChange={(e) => setLocation(e.target.value)}/>
        <label>ARE YOU SIGNING UP TO BE A MENTOR?</label>
        <div className='trishapoops'>
          <select 
            className='select-box' 
            onChange={(e) => setMentorBool(e.target.value)}>
            <option>False</option>
            <option>True</option>
          </select>
        </div>
        {mentorBool ? 
          <div>
            <label>DO YOU HAVE ANY ADVICE FOR A MENTEE?</label>
            <input onChange={(e) => setAdviceQ(e.target.value)}/>
            <label>WHAT DO YOU ENJOY ABOUT YOUR FIELD?</label>
            <input onChange={(e) => setEnjoyQ(e.target.value)}/>
            <label>WHAT ARE YOUR FIELDS OF KNOWLEDGE?</label>
            <input onChange={(e) => setknowledgeField(e.target.value)}/>
            <label>WHAT DO YOU FEEL COMFORTABLE MENTORING?</label>
            <input onChange={(e) => setTeachingPoints(e.target.value)}/>
            <label>WHAT IS YOUR TYPICAL WORK DAY LIKE?</label>
            <input onChange={(e) => setworkDay(e.target.value)}/>
          </div>
          :
          null
        }
        <label>WHAT FIELD ARE YOU CURRENTLY WORKING IN?</label>
        <input onChange={(e) => setField(e.target.value)}/>
        <label>WHAT IS YOUR LEVEL OF EXPERTISE IN YOUR CURRENT FIELD?</label>
        <div className='trishapoops'>
          <select 
            className='select-box' 
            onChange={(e) => setExpertise(e.target.value)}>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Adanced</option>
          </select>
        </div>
        <label>TELL US A LITTLE ABOUT YOURSELF</label>
        <input onChange={(e) => setAboutMe(e.target.value)}/>
        <label>WHAT ARE YOUR GENDER PRONOUNS?</label>
        <input onChange={(e) => setGender(e.target.value)}/>
        <label>UPLOAD A PROFILE IMAGE</label>
        <input onChange={(e) => setImage(e.target.value)}/>
        <button type='button' onClick={clickHandler}>submit</button>
      </form>
    </section>
  );
}

export default SignUpForm;
