import React from 'react'
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar';
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
  const mentors = useSelector(state => state.mentors);

  const startButtons = [{nav: '/about', name: 'about'}, {nav: '/signup', name: 'sign up'}, {nav: '/login', name: 'log in'}];

  const mainButtons = [{nav: '/mentors', name: 'find mentors'}, {nav: '/messages', name: 'messages'}, {nav: '/meetups', name: 'meetups'}, {nav: '/myprofile', name: 'my profile'}, {nav: '/', name: 'log out'}];

  return (
    <main>
      <Route exact path='/'>
        <Navbar buttons={startButtons} />
        <Splash />
      </Route>
      <Route path='/about'>
        <Navbar buttons={startButtons} />
        <About />
      </Route>
      <Route path='/login'>
        <Navbar buttons={startButtons} />
        <LoginForm />
      </Route>
      <Route path='/signup'>
        <Navbar buttons={startButtons} />
        <SignUpForm />
      </Route>
      <Route path='/myprofile'>
        <Navbar buttons={mainButtons} />
        <UserProfile user={useSelector(state => state.currentUser)} />
      </Route>
      <Route exact path='/mentors'>
        <Navbar buttons={mainButtons} />
        <ProfileContainer />
      </Route>
      <Route
        exact path='/mentors/:id'
        render={({ match }) => {
          let mentor = mentors.find(mentor => mentor.id === parseInt(match.params.id))
          return mentor &&
            <>
              <Navbar buttons={mainButtons}/>
              <UserProfile user={mentor} />
            </>
        }}
      />
      <Route path='/inbox'>
        <Navbar buttons={mainButtons} />
        <Inbox />
      </Route>
      <Route path='/messages'>
        <Navbar buttons={mainButtons} />
        <MessageContainer />
      </Route>
      <Route path='/meetups'>
        <Navbar buttons={mainButtons} />
        <MeetupContainer />
      </Route>
    </main>
  )
}

export default App;
