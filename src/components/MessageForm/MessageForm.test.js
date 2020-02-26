import React from 'react';
import { shallow } from 'enzyme';
import MessageForm from './MessageForm';
import { fetchData } from '../../utils/apiCalls';
import { useSelector, useDispatch } from 'react-redux'; 



const mockCurrentUser = {
  id: 3,
  name: 'pants'
}

const mockOtherMessenger = {
  id: 4
}

jest.mock('../../utils/apiCalls');

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
      expect(wrapper.find('#stateMessageToSend').prop('value')).toEqual('test input');
    });
  });

  describe('send message button', () => {
    const mockDispatch = jest.fn();
    jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: () => mockDispatch
    }));

    it('should fire sendMessage', () => {
      const mockVariables = {data: {createMessage: {message: 'test'}}}
      const mockedDispatch = jest.fn();
      useDispatch(mockedDispatch);
      fetchData.mockImplementation(() => {
        return (
          Promise.resolve(mockVariables)
        )
      });
      
      wrapper.find('#messageButton').simulate('click', {preventDefault: () => true});

      expect(wrapper.find('#stateMessageToSend').prop('value')).toEqual('');
    });
  });

  describe('fire sendMessage', () => {
    const mockDispatch = jest.fn();
    jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: () => mockDispatch
    }));

    it('should show that sendMessages was called', async () => {
      const mockVariables = {data: {createMessage: {message: 'test'}}}
      const mockedDispatch = jest.fn();
      useDispatch(mockedDispatch);
      fetchData.mockImplementation(() => {
        return (
          Promise.resolve(mockVariables)
        )
      })
  
      await wrapper.find('#messageButton').simulate('click');
      expect(fetchData).toHaveBeenCalled();
    });
  });
});
