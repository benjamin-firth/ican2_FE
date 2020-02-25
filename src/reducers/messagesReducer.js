export const messagesReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_MESSAGES' :
      return action.messages;
    case 'ADD_MESSAGE' :
      let newState = {...state};
      newState.messages.push(action.message);
      return newState;
    default:
      return state;
  }
}
