export const loginCurrentUser = user => ({
  type: 'LOG_IN',
  user
});

export const logoutCurrentUser = user => ({
  type: 'LOG_OUT',
  user
});

export const loadMentors = mentors => ({
  type: 'LOAD_MENTORS',
  mentors
})
