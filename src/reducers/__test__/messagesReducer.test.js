import { messagesReducer } from '../messagesReducer';

describe('messagesReducer', () => {
  it('should return the initial state', () => {
    const expected = {};

    const result = messagesReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the correct state if the action is LOAD_MESSAGES', () => {
    const initialState = {};
    const messages = 'mock message';
    const expected = 'mock message';

    const action = {
      type: 'LOAD_MESSAGES',
      messages
    };

    const result = messagesReducer(initialState, action);

    expect(result).toEqual(expected);
  });

  it('should return the correct state if the action is ADD_MESSAGES', () => {
    const initialState = {messages: []};
    const message = 'mock message';
    const expected = {messages: ['mock message']};

    const action = {
      type: 'ADD_MESSAGE',
      message
    };

    const result = messagesReducer(initialState, action);

    expect(result).toEqual(expected);
  });
});