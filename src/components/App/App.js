import React from 'react';
import NavBar from '../NavBar/NavBar';
import Splash from '../Splash/Splash';
import About from '../About/About';
import LoginForm from '../LoginForm/LoginForm';
import SignUpForm from '../SignUpForm/SignUpForm';
import UserProfile from '../UserProfile/UserProfile';
import ProfileContainer from '../ProfileContainer/ProfileContainer';
import Inbox from '../Inbox/Inbox';
import MessageContainer from '../MessageContainer/MessageContainer';
import MeetupContainer from '../MeetupContainer/MeetupContainer';

const App = () => {

  return (
    <main>
      <NavBar />
      <Splash />
      <About />
      <LoginForm />
      <SignUpForm />
      <UserProfile />
      <ProfileContainer />
      <Inbox />
      <MessageContainer />
      <MeetupContainer />
    </main>
  )
}

export default App;
