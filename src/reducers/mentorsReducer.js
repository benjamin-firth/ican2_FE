export const mentorsReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_MENTORS' :
      return action.mentors;
    default:
      return state;
  }
}
