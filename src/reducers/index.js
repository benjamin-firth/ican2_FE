import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { usersReducer } from './usersReducer';
import { mentorsReducer } from './mentorsReducer';

const rootReducer = combineReducers({
  currentUser: loginReducer,
  allUsers: usersReducer,
  mentors: mentorsReducer
});

export default rootReducer;
