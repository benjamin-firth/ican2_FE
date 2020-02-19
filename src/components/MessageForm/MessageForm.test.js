import React from 'react';
import { shallow } from 'enzyme';
import MessageForm from './MessageForm';

describe('MessageForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <MessageForm />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});