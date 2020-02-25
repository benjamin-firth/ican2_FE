import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from './LoginForm';

jest.mock("react-redux", () => ({
  useSelector: () => 'state',
  useDispatch: () => jest.fn()
}));

describe('LoginForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <LoginForm />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
