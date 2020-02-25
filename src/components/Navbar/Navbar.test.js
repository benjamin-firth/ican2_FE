import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

jest.mock("react-redux", () => ({
  useSelector: () => 'mockState',
  useDispatch: () => jest.fn()
}));

describe('Navbar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <Navbar />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
