import React from 'react';
import { shallow } from 'enzyme';
import MobileNavButton from './MobileNavButton';

jest.mock("react-redux", () => ({
  useDispatch: () => jest.fn()
}));

describe('MobileNavButton', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <MobileNavButton nav='/' name='home' />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should fire logout', () => {
    wrapper.find('#logoutButton').simulate('click');

    expect(wrapper.find('#logoutButton').prop('value')).toEqual('home');
  });

});
