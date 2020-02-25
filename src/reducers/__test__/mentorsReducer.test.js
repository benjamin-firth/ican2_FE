import { mentorsReducer } from '../mentorsReducer';

describe('mentorsReducer', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = mentorsReducer(undefined, []);

    expect(result).toEqual(expected);
  });

  it('should return the correct state if the action is LOG_IN', () => {
    const initialState = [];
    const mentors = ['mentor'];
    const expected = ['mentor'];

    const action = {
      type: 'LOAD_MENTORS',
      mentors
    };

    const result = mentorsReducer(initialState, action);

    expect(result).toEqual(expected);
  });
});