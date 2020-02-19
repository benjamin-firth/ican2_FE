import React from 'react';
import { shallow } from 'enzyme';
import UserProfile from './UserProfile';

describe('UserProfile', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <UserProfile />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});