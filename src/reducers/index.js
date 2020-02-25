import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { usersReducer } from './usersReducer';
import { mentorsReducer } from './mentorsReducer';
import { messagesReducer } from './messagesReducer';


const rootReducer = combineReducers({
  currentUser: loginReducer,
  allUsers: usersReducer,
  mentors: mentorsReducer,
  messages: messagesReducer
});

export default rootReducer;
