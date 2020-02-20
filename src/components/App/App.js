import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from '../Navbar/Navbar';
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
      <Route exact path='/'>
        <NavBar />
      </Route>
      <Route path='/welcome'>
        <NavBar />
        <Splash />
      </Route>
      <Route path='/about'>
        <NavBar />
        <About />
      </Route>
      <Route path='/login'>
        <NavBar />
        <LoginForm />
      </Route>
      <Route path='/signup'>
        <NavBar />
        <SignUpForm />
      </Route>
      <Route path='/myprofile'>
        <NavBar />
        <UserProfile />
      </Route>
      <Route path='/mentors'>
        <NavBar />
        <ProfileContainer />
      </Route>
      <Route path='/inbox'>
        <NavBar />
        <Inbox />
      </Route>
      <Route path='/message'>
        <NavBar />
        <MessageContainer />
      </Route>
      <Route path='/meetups'>
        <NavBar />
        <MeetupContainer />
      </Route>
    </main>
  )
}

export default App;
