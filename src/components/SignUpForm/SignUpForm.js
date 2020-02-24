import React, { useState, useEffect } from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { useHistory, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setNewUser, loginCurrentUser } from '../../actions';
import './SignUpForm.scss';

const SignUpForm = () => {
  const CLOUDINARY_UPLOAD_PRESET = 'ebu217wb';
  const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dd7lamzs3/upload';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [field, setField] = useState('');
  const [expertise, setExpertise] = useState('Beginner');
  const [mentorBool, setMentorBool] = useState(false);
  const [aboutMe, setAboutMe] = useState('');
  const [gender, setGender] = useState('');
  const [adviceQ, setAdviceQ] = useState('');
  const [enjoyQ, setEnjoyQ] = useState('');
  const [knowledgeField, setknowledgeField] = useState('');
  const [teachingPoints, setTeachingPoints] = useState('');
  const [workDay, setworkDay] = useState('');
  const [error, setError] = useState('');
  const [uploadedFileCloudinaryUrl, setUrl] = useState('');
  const [uploadedFile, setUploadedFile] = useState([]);
  const currentUser = useSelector(state => state.currentUser);
  const dispatch = useDispatch();
  
  const handleImageUpload = (file) => {
    let upload = request
      .post(CLOUDINARY_UPLOAD_URL)
      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      };
      if (response.body.secure_url !== '') {
        setUrl(response.body.secure_url);
      };
    });
  };
  
  const onImageDrop = (files) => {
    setUploadedFile(files[0]);
    handleImageUpload(files[0]);
  };
  
  const setUser = () => {
    console.log('test1');

    const mutation = {
      query: `mutation {\n  createUser(input:  {\n  name: "${name}", email: "${email}" passwordDigest: \"lalala\"\n mentor: ${mentorBool}\n gender: "${gender}"\n fieldOfInterest: "${field}"\n aboutMe: "${aboutMe}"\n  image: "${uploadedFileCloudinaryUrl}"\n age: 9\n  zipCode: \"98501\"\n state: \"CO\"\n city: "${location}"\n  fieldOfKnowledge: "${knowledgeField}"\n  experienceLevel: "${expertise}"\n  workDayQuestion: "${workDay}"\n enjoymentQuestion: "${enjoyQ}"\n  teachingPointsQuestion: "${teachingPoints}"\n  adviceQuestion: "${adviceQ}"\n}) {\n  user {\n id\n name\n email\n mentor\n profile { fieldOfInterest\n  aboutMe\n  image\n  gender\n}  mentorProfile { fieldOfKnowledge\n experienceLevel\n workDayQuestion\n enjoymentQuestion\n teachingPointsQuestion\n adviceQuestion\n}}\n errors\n  }\n }\n `,
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
        return dispatch(loginCurrentUser(data.data.createUser.user));
        // return dispatch(setNewUser(data.createUser.user));
      })
      .catch(error => setError('That user does not exist. Please sign up!'))
    }
  };

  const clickHandler = (e) => {
    console.log('imageUrl: ', uploadedFileCloudinaryUrl);
    login();
  }

  return (
    currentUser.name ? <Redirect to='myprofile' /> :
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
            <option value={false}>False</option>
            <option value={true}>True</option>
          </select>
        </div>
        {mentorBool && 
          <>
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
          </>
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
            <option>Advanced</option>
          </select>
        </div>
        <label>TELL US A LITTLE ABOUT YOURSELF</label>
        <input onChange={(e) => setAboutMe(e.target.value)}/>
        <label>WHAT ARE YOUR GENDER PRONOUNS?</label>
        <input onChange={(e) => setGender(e.target.value)}/>
        <label>UPLOAD A PROFILE IMAGE</label>
        {/* <input onChange={(e) => setImage(e.target.value)}/> */}
        <Dropzone
          onDrop={onImageDrop}
          accept="image/*"
          multiple={false}>
            {({getRootProps, getInputProps}) => {
              return (
                <div
                  {...getRootProps()}
                >
                  <input {...getInputProps()} />
                  {
                  <p>Try dropping some files here, or click to select files to upload.</p>
                  }
                </div>
              )
          }}
        </Dropzone>
        <div>
          <div>
            {uploadedFileCloudinaryUrl === '' ? null :
            <div>
              <p>{uploadedFile.name}</p>
              <img src={uploadedFileCloudinaryUrl} />
            </div>}
          </div>
        </div>
        <button type='button' onClick={clickHandler}>submit</button>
      </form>
    </section>
  );
}

export default SignUpForm;
