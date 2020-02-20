import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import './SignUpForm.scss';

const SignUpForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [field, setField] = useState('');
  const [expertise, setExpertise] = useState('');
  const history = useHistory();

  const clickHandler = () => {
    history.push('/myprofile');
  }

  return (
    <section>
      <h3>build your profile</h3>
      <form>
        <label>WHAT IS YOUR FIRST NAME?</label>
        <input onChange={(e) => setName(e.target.value)}/>
        <label>WHAT IS YOUR EMAIL ADDRESS?</label>
        <input onChange={(e) => setEmail(e.target.value)}/>
        <label>WHAT IS YOUR CURRENT CITY AND STATE?</label>
        <input onChange={(e) => setLocation(e.target.value)}/>
        <label>WHAT FIELD ARE YOU CURRENTLY WORKING IN?</label>
        <input onChange={(e) => setField(e.target.value)}/>
        <label>WHAT IS YOUR LEVEL OF EXPERTISE IN YOUR CURRENT FIELD?</label>
        <select onChange={(e) => setExpertise(e.target.value)}>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Adanced</option>
        </select>
        <button onClick={clickHandler}>SUBMIT</button>
      </form>
    </section>
  );
}

export default SignUpForm;
