import { loginCurrentUser, logoutCurrentUser, setNewUser, loadMentors, loadMessages, filterMentors } from './index';

describe('actions', () => {

  it('should have a type of LOG_IN', () => {
    let user = {name: 'pants', id: 1};

    const expectedAction = {
      type: 'LOG_IN',
      user
    };

    const result = loginCurrentUser(user);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of LOG_OUT', () => {
    const expectedAction = {
      type: 'LOG_OUT'
    };

    const result = logoutCurrentUser();

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of SET_NEW_USER', () => {
    let user = {name: 'pants', id: 1};

    const expectedAction = {
      type: 'SET_NEW_USER',
      user
    };

    const result = setNewUser(user);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of LOAD_MENTORS', () => {
    let mentors = [{name: 'pants', id: 1}, {name: 'shirts', id: 2}];

    const expectedAction = {
      type: 'LOAD_MENTORS',
      mentors
    };

    const result = loadMentors(mentors);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of LOAD_MESSAGES', () => {
    let messages = [{sender: 2, recipient: 1, body: 'hello'}, {sender: 1, recipient: 2, body: 'hello there'}];

    const expectedAction = {
      type: 'LOAD_MESSAGES',
      messages
    };

    const result = loadMessages(messages);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of FILTER_MENTORS', () => {
    let mentors = [{id: 2, name: 'Ben'}, {id: 1, name: 'John'}];

    const expectedAction = {
      type: 'FILTER_MENTORS',
      mentors
    };

    const result = filterMentors(mentors);

    expect(result).toEqual(expectedAction);
  });

});
