export const messagesReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_MESSAGES' :
      return action.messages;
    default:
      return state;
  }
}
