import React from 'react';
import { shallow } from 'enzyme';
import UserProfile from './UserProfile';

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

});
