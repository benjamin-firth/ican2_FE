import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';

const rootReducer = combineReducers({
  currentUser: loginReducer
})

export default rootReducer;
