import React from 'react';
import { shallow } from 'enzyme';
import UserProfile from './UserProfile';
import { useSelector, useDispatch } from 'react-redux'; 
import { fetchData } from '../../utils/apiCalls';

jest.mock('../../utils/apiCalls');

jest.mock("react-redux", () => ({
  useSelector: () => 'mockState',
  useDispatch: () => jest.fn()
}));

describe('UserProfile', () => {
  let wrapper;
  const mockUser = {
    id: 8,
    name: 'pants',
    profile: {
      image: 'url'
    },
    location: {
      city: 'Springfield',
      state: 'Ohio'
    }
  }

  beforeEach(() => {
    wrapper = shallow( <UserProfile user={mockUser}/>)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('find messages', () => {
    const mockDispatch = jest.fn();
    jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: () => mockDispatch
    }));

    it('should show that findMessages was called', async () => {
      const mockMessages = {messages: []}
      const mockedDispatch = jest.fn();
      useDispatch(mockedDispatch);
      fetchData.mockImplementation((body) => {
        return (
          Promise.resolve(mockMessages)
        )
      })
  

      await wrapper.find('#getMessageButton').simulate('click');
      expect(fetchData).toHaveBeenCalled();
    });
  });
});
