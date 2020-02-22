export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOG_IN' :
      return action.user;
    case 'LOG_OUT' :
      return {};
    case 'SET_NEW_USER' :
      return 
    default:
      return state;
  }
}
