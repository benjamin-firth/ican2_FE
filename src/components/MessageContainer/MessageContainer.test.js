import React from 'react';
import { shallow } from 'enzyme';
import MessageContainer from './MessageContainer';

describe('MessageContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <MessageContainer />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});