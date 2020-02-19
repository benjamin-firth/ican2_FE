import React from 'react';
import { shallow } from 'enzyme';
import MeetupContainer from './MeetupContainer';

describe('MeetupContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <MeetupContainer />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});