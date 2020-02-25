import React from 'react';
import { shallow } from 'enzyme';
import Message from './Message';

const mockState = {
  currentUser: {
    id: 2,
    profile: {
      image: 'url'
    }
  },
  messages: {otherMessenger: {
      id: 3
    }
  }
}

jest.mock("react-redux", () => ({
  useSelector: () => mockState
}));

describe('Message', () => {
  let wrapper;
  const mockMessage = {sender: 2, recipient: 1, body: 'hello'};

  beforeEach(() => {
    wrapper = shallow( <Message message={mockMessage}/>)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
