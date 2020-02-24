import React from 'react';
import { shallow } from 'enzyme';
import MessageContainer from './MessageContainer';

describe('MessageContainer', () => {
  let wrapper;
  let mockRecipient = { name: 'mock name' };

  beforeEach(() => {
    wrapper = shallow( <MessageContainer recipient={mockRecipient} />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
