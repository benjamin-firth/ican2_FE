import React from 'react';
import { shallow } from 'enzyme';
import NavButton from './NavButton';

jest.mock("react-redux", () => ({
  useDispatch: () => jest.fn()
}));

describe('NavButton', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <NavButton nav='/' name='home' />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
