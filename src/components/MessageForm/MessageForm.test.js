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

  describe('text area input', () => {
    it('stateMessageToSend input', () => {
      expect(wrapper.find('#stateMessageToSend').prop('value')).toEqual('');
      wrapper.find('#stateMessageToSend').simulate('change', {target: {value: 'test input'}});
      // wrapper.update()
      expect(wrapper.find('#stateMessageToSend').prop('value')).toEqual('test input');
    });
  });

  describe('send message button', () => {
    it('should fire sendMessage', () => {
      wrapper.find('#messageButton').simulate('click', {preventDefault: () => true});

      expect(wrapper.find('#stateMessageToSend').prop('value')).toEqual('');
    })
  })

});
