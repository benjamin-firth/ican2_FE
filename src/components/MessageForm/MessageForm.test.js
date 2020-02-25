import React from 'react';
import { shallow } from 'enzyme';
import MessageForm from './MessageForm';

const mockCurrentUser = {
  id: 3,
  name: 'pants'
}

const mockOtherMessenger = {
  id: 4
}

jest.mock("react-redux", () => ({
  useSelector: () => mockCurrentUser,
  useDispatch: () => jest.fn()
}));

describe('MessageForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <MessageForm otherMessenger={mockOtherMessenger}/>)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
