import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { usersReducer } from './usersReducer';

const rootReducer = combineReducers({
  currentUser: loginReducer,
  allUsers: usersReducer
});

export default rootReducer;
