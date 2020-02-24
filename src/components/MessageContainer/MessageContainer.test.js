import React from 'react';
import { shallow } from 'enzyme';
import MessageContainer from './MessageContainer';

describe('MessageContainer', () => {
  let wrapper;
  let mockOther = { name: 'mock name' };

  beforeEach(() => {
    wrapper = shallow( <MessageContainer other={mockOther} />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});