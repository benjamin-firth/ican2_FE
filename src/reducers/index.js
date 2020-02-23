import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { mentorsReducer } from './mentorsReducer';

const rootReducer = combineReducers({
  currentUser: userReducer,
  mentors: mentorsReducer
})

export default rootReducer;
