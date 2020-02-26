export const filteredMentorsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FILTER_MENTORS' :
      return action.mentors;
    default:
      return state;
  }
}
