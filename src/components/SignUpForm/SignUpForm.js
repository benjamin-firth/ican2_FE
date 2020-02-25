import React, { useState, useEffect } from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { useHistory, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setNewUser, loginCurrentUser } from '../../actions';
import { fetchData } from '../../utils/apiCalls';
import Loader from '../Loader/Loader';
import './SignUpForm.scss';

const SignUpForm = () => {
  const CLOUDINARY_UPLOAD_PRESET = 'ebu217wb';
  const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dd7lamzs3/upload';
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [expertise, setExpertise] = useState('');
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
        setError(err);
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
    let body;

    if (mentorBool) {
      body = {
        query: `mutation {\n  createUser(input:  {\n  name: "${name}", email: "${email}" passwordDigest: \"lalala\"\n mentor: ${mentorBool}\n gender: "${gender}"\n fieldOfInterest: "${knowledgeField}"\n aboutMe: "${aboutMe}"\n  image: "${uploadedFileCloudinaryUrl}"\n zipCode: \"98501\"\n  state: "${state}"\n city: "${city}"\n  fieldOfKnowledge: "${knowledgeField}"\n  experienceLevel: "${expertise}"\n  workDayQuestion: "${workDay}"\n enjoymentQuestion: "${enjoyQ}"\n  teachingPointsQuestion: "${teachingPoints}"\n  adviceQuestion: "${adviceQ}"\n}) {\n  user {\n id\n name\n email\n mentor\n location { city\n  state\n} profile { fieldOfInterest\n  aboutMe\n  image\n  gender\n}  mentorProfile { fieldOfKnowledge\n experienceLevel\n workDayQuestion\n enjoymentQuestion\n teachingPointsQuestion\n adviceQuestion\n}}\n errors\n }\n }\n `,
        variables: {}
      };
    } else {
      body = {
        query: `mutation {\n  createUser(input:  {\n  name: "${name}", email: "${email}" passwordDigest: \"lalala\"\n mentor: ${mentorBool}\n gender: "${gender}"\n fieldOfInterest: "learning"\n aboutMe: "${aboutMe}"\n  image: "${uploadedFileCloudinaryUrl}"\n zipCode: \"98501\"\n  state: "${state}"\n city: "${city}"\n }) {\n  user {\n id\n name\n email\n mentor\n location { city\n  state\n} profile { fieldOfInterest\n  aboutMe\n  image\n  gender\n}  mentorProfile { fieldOfKnowledge\n experienceLevel\n workDayQuestion\n enjoymentQuestion\n teachingPointsQuestion\n adviceQuestion\n}}\n errors\n }\n }\n `,
        variables: {}
      };
    }
    return fetchData(body);
  };

  const login = (e) => {
    setUser()
    .then(data => {
      dispatch(loginCurrentUser(data.data.createUser.user));
      setIsLoading(false);
    })
    .catch(error => {
      setIsLoading(false);
      setError('Please make sure all fields are filled out.')
    })
  };

  const clickHandler = (e) => {
    setIsLoading(true);
    login();
  }

  return (
    currentUser.location ? <Redirect to='myprofile' /> :
    isLoading ? <Loader message='creating your profile...' /> :
    <section className='sign-up-container'>
      <h3>build your profile</h3>
      <form className='sign-up-form'>
        {error && <p className='error-msg'>{error}</p>}
        <label>WHAT IS YOUR FIRST NAME?</label>
        <input onChange={(e) => {
          setName(e.target.value)
          setError('')
        }}/>
        <label>WHAT IS YOUR EMAIL ADDRESS?</label>
        <input onChange={(e) => {
          setEmail(e.target.value);
          setError('');
        }}/>
        <label>WHAT IS YOUR CURRENT CITY AND STATE?</label>
        <input type="hidden" name="country" id="countryId" value="US"/>
        <div className='city-state-select'>
          <div className='select'>
            <select
              name="state"
              className="states order-alpha select-box state-select"
              id="stateId"
              onChange={(e) => {
                setState(e.target.value);
                setError('');
              }}
            >
              <option value="">Select State</option>
            </select>
          </div>
          <div className='select'>
            <select
              name="city"
              className="cities order-alpha select-box"
              id="cityId"
              onChange={(e) => {
                setCity(e.target.value);
                setError('');
              }}
            >
              <option value="">Select City</option>
            </select>
          </div>
        </div>
        <label>WHAT ARE YOUR PRONOUNS?</label>
        <div className='select'>
          <select
            className='select-box'
            onChange={(e) => {
              setGender(e.target.value);
              setError('');
            }}
          >
            <option value=''>Select Pronouns</option>
            <option value='She/Her'>She/Her</option>
            <option value='He/Him'>He/Him</option>
            <option value='They/Them'>They/Them</option>
            <option value='none-specified'>I prefer not to say</option>
          </select>
        </div>
        <label>TELL US A LITTLE ABOUT YOURSELF (This will appear in your profile)</label>
        <input onChange={(e) => {
          setAboutMe(e.target.value);
          setError('');
        }}/>
        <label>DO YOU WANT TO BE A MENTOR?</label>
        <div className='select'>
          <select
            className='select-box'
            onChange={(e) => {
              setMentorBool(e.target.value);
              setError('');
            }}
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
          onChange={(e) => {
            setknowledgeField(e.target.value);
            setError('');
          }}
          >
            <option value=''>Select Career Field</option>
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
          </div>
          <label>WHAT IS YOUR LEVEL OF EXPERTISE IN YOUR CURRENT FIELD?</label>
          <div className='select'>
          <select
          className='select-box'
          onChange={(e) => {
            setExpertise(e.target.value);
            setError('');
          }}
          >
          <option value=''>Select Experience Level</option>
          <option value='Beginner'>Beginner</option>
          <option value='Intermediate'>Intermediate</option>
          <option value='Advanced'>Adanced</option>
          </select>
          </div>
            <label>DESCRIBE A TYPICAL DAY AT WORK.</label>
            <input onChange={(e) => {
              setworkDay(e.target.value);
              setError('');
            }}/>
            <label>WHAT DO YOU ENJOY MOST ABOUT YOUR WORK?</label>
            <input onChange={(e) => {
              setEnjoyQ(e.target.value);
              setError('');
            }}/>
            <label>WHAT DO YOU FEEL THE MOST EXCITED ABOUT TEACHING OTHERS?</label>
            <input onChange={(e) => {
              setTeachingPoints(e.target.value);
              setError('');
            }}/>
            <label>WHAT IS ONE PIECE OF ADVICE YOU HAVE FOR OTHERS LOOKING TO JOIN THIS FIELD?</label>
            <input onChange={(e) => {
              setAdviceQ(e.target.value);
              setError('');
            }}/>
          </>
        }
        <label>UPLOAD A PROFILE IMAGE</label>
        <Dropzone
          onDrop={onImageDrop}
          accept="image/*"
          multiple={false}>
            {({getRootProps, getInputProps}) => {
              return (
                <div className='dropzone' {...getRootProps()} >
                  <input {...getInputProps()} />
                  <p>drag & drop a file here or click to select file</p>
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
