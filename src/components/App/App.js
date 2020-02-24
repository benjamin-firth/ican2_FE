import React from 'react'
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BeginNavbar from '../BeginNavbar/BeginNavbar';
import Navbar from '../Navbar/Navbar';
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

  return (
    <main>
      <Route exact path='/'>
        <BeginNavbar />
        <About />
      </Route>
      <Route path='/login'>
        <BeginNavbar />
        <LoginForm />
      </Route>
      <Route path='/signup'>
        <BeginNavbar />
        <SignUpForm />
      </Route>
      <Route path='/myprofile'>
        <Navbar />
        <UserProfile user={useSelector(state => state.currentUser)} />
      </Route>
      <Route exact path='/mentors'>
        <Navbar />
        <ProfileContainer />
      </Route>
      <Route
        exact path='/mentors/:id'
        render={({ match }) => {
          let mentor = mentors.find(mentor => mentor.id === parseInt(match.params.id))
          return mentor &&
            <>
              <Navbar />
              <UserProfile user={mentor} />
            </>
        }}
      />
      <Route path='/inbox'>
        <Navbar />
        <Inbox />
      </Route>
      <Route exact path='/messages'>
        <Navbar />
        <Inbox />
      </Route>
      <Route
        exact path='/messages/:id'
        render={({ match }) => {
          let mentor = mentors.find(mentor => mentor.id === parseInt(match.params.id))
          return mentor &&
            <>
              <Navbar />
              <MessageContainer other={mentor} />
            </>
        }}
      />
      <Route path='/meetups'>
        <Navbar />
        <MeetupContainer />
      </Route>
    </main>
  )
}

export default App;
