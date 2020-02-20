import React from 'react';
import './SignUpForm.scss';

const SignUpForm = () => {

  return (
    <section>
      <h3>build your profile</h3>
      <form>
        <label>WHAT IS YOUR FIRST NAME?</label>
        <input />
        <label>WHAT IS YOUR EMAIL ADDRESS?</label>
        <input />
        <label>WHAT IS YOUR CURRENT CITY AND STATE?</label>
        <input />
        <label>WHAT FIELD ARE YOU CURRENTLY WORKING IN?</label>
        <input />
        <label>WHAT IS YOUR LEVEL OF EXPERTISE IN YOUR CURRENT FIELD?</label>
        <input />
        <button>SUBMIT</button>
      </form>
    </section>
  );
}

export default SignUpForm;
