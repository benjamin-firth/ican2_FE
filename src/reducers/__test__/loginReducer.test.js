import { loginReducer } from '../loginReducer';

describe('loginReducer', () => {
  it('should return the initial state', () => {
    const expected = {};

    const result = loginReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the correct state if the action is LOG_IN', () => {
    const initialState = {};
    const user = 'user';
    const expected = 'user';

    const action = {
      type: 'LOG_IN',
      user
    };

    const result = loginReducer(initialState, action);

    expect(result).toEqual(expected);
  });

  it('should return the correct state if the action is LOG_OUT', () => {
    const initialState = {};
    const user = 'user';
    const expected = {};

    const loginAction = {
      type: 'LOG_IN',
      user
    };

    const logoutAction = {
      type: 'LOG_OUT',
      user
    };

    loginReducer(initialState, loginAction);

    const result = loginReducer(initialState, logoutAction);

    expect(result).toEqual(expected);

    expect(result).toEqual(expected);
  });
});