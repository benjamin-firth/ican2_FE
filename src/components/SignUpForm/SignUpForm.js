import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setNewUser } from '../../actions';
import './SignUpForm.scss';

const SignUpForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
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

    const mutation = {
      query: `mutation {\n  createUser(input:  {\n  name: "${name}", email: "${email}" passwordDigest: \"lalala\"\n mentor: ${mentorBool}\n gender: "${gender}"\n aboutMe: "${aboutMe}"\n  image: "${image}"\n age: 9\n  zipCode: \"98501\"\n  state: "${state}"\n city: "${city}"\n  fieldOfKnowledge: "${knowledgeField}"\n  experienceLevel: "${expertise}"\n  workDayQuestion: "${workDay}"\n enjoymentQuestion: "${enjoyQ}"\n  teachingPointsQuestion: "${teachingPoints}"\n  adviceQuestion: "${adviceQ}"\n}) {\n  user {\n id\n name\n email\n mentor\n profile { fieldOfInterest\n  aboutMe\n  image\n  gender\n}  mentorProfile { fieldOfKnowledge\n experienceLevel\n workDayQuestion\n enjoymentQuestion\n teachingPointsQuestion\n adviceQuestion\n}}\n errors\n }\n }\n `,
      variables: {}
    };

    const options = {
      method: 'POST',
      body: JSON.stringify(mutation),
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow'
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
    if (!name.length || !email.length || !field.length || !expertise.length || !aboutMe.length || !gender.length) {
      setError('Please be sure you have filled out all sections.');
      console.log(error);
    } else {
      setUser()
      .then(data => {
        console.log("data from creating user", data);
        return dispatch(setNewUser(data.data.users));
      })
      .catch(error => setError('That user does not exist. Please sign up!'))
    }
  };

  const clickHandler = (e) => {
    login();
    // history.push('/myprofile');
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
        <input type="hidden" name="country" id="countryId" value="US"/>
        <div className='city-state-select'>
          <div className='select'>
            <select
              name="state"
              class="states order-alpha select-box state-select"
              id="stateId"
              onChange={(e) => setState(e.target.value)}
            >
              <option value="">Select State</option>
            </select>
          </div>
          <div className='select'>
            <select
              name="city"
              class="cities order-alpha select-box"
              id="cityId"
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="">Select City</option>
            </select>
          </div>
        </div>
        <label>WHAT ARE YOUR PRONOUNS?</label>
        <div className='select'>
          <select
            className='select-box'
            onChange={(e) => setGender(e.target.value)}
          >
            <option value=''>Select Pronouns</option>
            <option value='she/her'>She/Her</option>
            <option value='he/him'>He/Him</option>
            <option value='they/them'>They/Them</option>
            <option value='none-specified'>I prefer not to say</option>
          </select>
        </div>
        <label>TELL US A LITTLE ABOUT YOURSELF (This will appear in your profile)</label>
        <input onChange={(e) => setAboutMe(e.target.value)}/>
        <label>DO YOU WANT TO BE A MENTOR?</label>
        <div className='select'>
          <select
            className='select-box'
            onChange={(e) => setMentorBool(e.target.value)}
          >
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </select>
        </div>
        {mentorBool &&
          <>
          <label>WHAT FIELD ARE YOU CURRENTLY WORKING IN?</label>
          <div className='select'>
          <select
          className='select-box'
          onChange={(e) => setknowledgeField(e.target.value)}
          >
          <option value=''>Select Career Field</option>
          <option value='agriculture'>Agriculture</option>
          <option value='biology'>Biology</option>
          <option value='botany'>Botany</option>
          <option value='business/finance'>Business/Finance</option>
          <option value='business/marketing'>Business/Marketing</option>
          <option value='chemistry'>Chemistry</option>
          <option value='construction'>Construction</option>
          <option value='education'>Education</option>
          <option value='fine arts'>Fine Arts</option>
          <option value='law/legal'>Law/Legal</option>
          <option value='law enforcement'>Law Enforcement</option>
          <option value='medicine'>Medicine</option>
          <option value='restaurateur/chef'>Restaurateur/Chef</option>
          <option value='software development'>Software Development</option>
          <option value='other'>Other</option>
          </select>
          </div>
          <label>WHAT IS YOUR LEVEL OF EXPERTISE IN YOUR CURRENT FIELD?</label>
          <div className='select'>
          <select
          className='select-box'
          onChange={(e) => setExpertise(e.target.value)}
          >
          <option value=''>Select Experience Level</option>
          <option value='beginner'>Beginner</option>
          <option value='intermediate'>Intermediate</option>
          <option value='advanced'>Adanced</option>
          </select>
          </div>
            <label>DESCRIBE A TYPICAL DAY AT WORK.</label>
            <input onChange={(e) => setworkDay(e.target.value)}/>
            <label>WHAT DO YOU ENJOY MOST ABOUT YOUR WORK?</label>
            <input onChange={(e) => setEnjoyQ(e.target.value)}/>
            <label>WHAT DO YOU FEEL THE MOST EXCITED ABOUT TEACHING OTHERS?</label>
            <input onChange={(e) => setTeachingPoints(e.target.value)}/>
            <label>WHAT IS ONE PIECE OF ADVICE YOU HAVE FOR OTHERS LOOKING TO JOIN THIS FIELD?</label>
            <input onChange={(e) => setAdviceQ(e.target.value)}/>
          </>
        }
        <label>UPLOAD A PROFILE IMAGE</label>
        <input onChange={(e) => setImage(e.target.value)}/>
        <button type='button' onClick={clickHandler}>submit</button>
      </form>
    </section>
  );
}

export default SignUpForm;
