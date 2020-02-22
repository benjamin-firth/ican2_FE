import React from 'react'
import { Route } from 'react-router-dom';
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
  const startButtons = [{nav: '/about', name: 'about'}, {nav: '/signup', name: 'sign up'}, {nav: '/login', name: 'log in'}];

  const mainButtons = [{nav: '/mentors', name: 'find mentors'}, {nav: '/inbox', name: 'messages'}, {nav: '/meetups', name: 'meetups'}, {nav: '/myprofile', name: 'my profile'}, {nav: '/login', name: 'log out'}];

  return (
    <main>
      <Route exact path='/'>
        <NavBar buttons={startButtons}/>
        <Splash />
      </Route>
      <Route path='/about'>
        <NavBar buttons={startButtons}/>
        <About />
      </Route>
      <Route path='/login'>
        <NavBar buttons={startButtons}/>
        <LoginForm />
      </Route>
      <Route path='/signup'>
        <NavBar buttons={startButtons}/>
        <SignUpForm />
      </Route>
      <Route path='/myprofile'>
        <NavBar buttons={mainButtons}/>
        <UserProfile />
      </Route>
      <Route path='/mentors'>
        <NavBar buttons={mainButtons}/>
        <ProfileContainer />
      </Route>
      <Route path='/inbox'>
        <NavBar buttons={mainButtons}/>
        <Inbox />
      </Route>
      <Route path='/message'>
        <NavBar buttons={mainButtons}/>
        <MessageContainer />
      </Route>
      <Route path='/meetups'>
        <NavBar buttons={mainButtons}/>
        <MeetupContainer />
      </Route>
    </main>
  )
}

export default App;
