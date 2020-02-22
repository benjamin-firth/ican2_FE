export const loginCurrentUser = user => ({
  type: 'LOG_IN',
  user
});

export const logoutCurrentUser = user => ({
  type: 'LOG_OUT',
  user
});

export const setNewUser = user => ({
  type: 'SET_NEW_USER',
  user
});
