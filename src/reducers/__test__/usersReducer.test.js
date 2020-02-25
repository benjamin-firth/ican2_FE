import { usersReducer } from '../usersReducer';

describe('usersReducer', () => {
  it('should return the initial state', () => {
    const expected = {};

    const result = usersReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the correct state if the action is LOG_IN', () => {
    const initialState = {};
    const user = 'mock user';
    const expected = 'mock user';

    const action = {
      type: 'SET_NEW_USER',
      user
    };

    const result = usersReducer(initialState, action);

    expect(result).toEqual(expected);
  });
});