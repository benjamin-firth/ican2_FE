import React from 'react';
import { shallow } from 'enzyme';
import { useDispatch } from 'react-redux';
import MessagePreview, { findMessenger, findMessages } from './MessagePreview';
import { fetchData } from '../../utils/apiCalls';

jest.mock('../../utils/apiCalls');
jest.mock("react-redux", () => ({
  useSelector: () => 'mockState',
  useDispatch: () => jest.fn()
}));

describe('MessagePreview', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = { otherMessengerId: 13 };
    wrapper = shallow( <MessagePreview {...props}/>)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('findMessenger', () => {
    fetchData.mockImplementation(() => {
      return (
        Promise.resolve({
          data: { users: {
            name: 'test name',
            profile: {
              image: 'test image'
            }
          }}
        })
      )
    });
    findMessenger();
    expect(fetchData).toHaveBeenCalled();
  });

  describe('findMessages', () => {
    const mockDispatch = jest.fn();
    jest.mock('react-redux', () => {
      useDispatch = () => mockDispatch
    });

    it('should fetch the message data', () => {
      const mockMessages = { messages: ['test']};
      useDispatch(mockDispatch);
      fetchData.mockImplementation(() => {
        return (
          Promise.resolve(mockMessages)
        )
      });

      findMessages(mockDispatch, { id: 13 });
      expect(fetchData).toHaveBeenCalled();
    });
  });
});
