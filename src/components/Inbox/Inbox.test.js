import React from 'react';
import { shallow } from 'enzyme';
import Inbox from './Inbox';

describe('Inbox', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <Inbox />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
