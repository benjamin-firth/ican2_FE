import React from 'react';
import { shallow } from 'enzyme';
import MessagePreview from './MessagePreview';

describe('MessagePreview', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <MessagePreview />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});