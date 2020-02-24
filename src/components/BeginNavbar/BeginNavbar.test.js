import React from './node_modules/react';
import { shallow } from './node_modules/enzyme';
import BeginNavbar from './BeginNavbar';

describe('BeginNavbar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <BeginNavbar />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
