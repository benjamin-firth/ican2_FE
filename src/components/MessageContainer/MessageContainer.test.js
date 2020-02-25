import React from 'react';
import { shallow } from 'enzyme';
import MessageContainer from './MessageContainer';

const mockState = {
    otherMessenger: {
      name: 'PANTS'
    },
    messages: [{sender: 2, recipient: 1, body: 'hello'}, {sender: 1, recipient: 2, body: 'hello there'}]
  }


jest.mock("react-redux", () => ({
  useSelector: () => mockState
}));

describe('MessageContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <MessageContainer />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
