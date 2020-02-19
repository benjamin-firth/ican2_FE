import React from 'react';
import { shallow } from 'enzyme';
import Meetup from './Meetup';

describe('Meetup', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <Meetup />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});