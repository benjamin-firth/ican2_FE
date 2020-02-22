import React from 'react';
import { shallow } from 'enzyme';
import MentorCard from './MentorCard';

describe('MentorCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <MentorCard />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
