import React from 'react';
import { shallow } from 'enzyme';
import Message from './Message';

describe('Message', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <Message />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});