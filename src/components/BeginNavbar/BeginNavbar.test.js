import React from 'react';
import { shallow } from 'enzyme';
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
