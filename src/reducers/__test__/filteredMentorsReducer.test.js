import { filteredMentorsReducer } from '../filteredMentorsReducer';

describe('filteredMentorsReducer', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = filteredMentorsReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the correct state if the action is FILTER_MENTORS', () => {
    const initialState = [];
    const mentors = [{ name: 'Ben', id: 1 }, { name: 'John', id: 2 }]

    const action = {
      type: 'FILTER_MENTORS',
      mentors
    };

    const result = filteredMentorsReducer(initialState, action);

    expect(result).toEqual(mentors);
  });

});
