import React, { useEffect } from 'react'
import { Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
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
import { loadMessages } from '../../actions';

const App = () => {
  const dispatch = useDispatch();
  const messages = useSelector(state => state.messages);
  const mentors = useSelector(state => state.mentors);
  const currentUser = useSelector(state => state.currentUser);

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
              <MessageContainer recipient={mentor} />
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
