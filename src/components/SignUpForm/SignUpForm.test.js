import React from 'react';
import { shallow } from 'enzyme';
import SignUpForm from './SignUpForm';

jest.mock("react-redux", () => ({
  useSelector: () => 'mockState',
  useDispatch: () => jest.fn()
}));

describe('SignUpForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <SignUpForm />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
