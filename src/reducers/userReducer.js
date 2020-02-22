export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CURRENT_USER' :
      return action.user;
    case 'SET_NEW_USER' :
      return 
    default:
      return state;
  }
}
