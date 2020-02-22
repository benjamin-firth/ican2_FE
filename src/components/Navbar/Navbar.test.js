import React from './node_modules/react';
import { shallow } from './node_modules/enzyme';
import NavBar from './NavBar';

describe('NavBar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <NavBar />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
