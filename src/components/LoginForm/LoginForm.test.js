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

  it('email input', () => {
    expect(wrapper.find('#stateEmail').prop('value')).toEqual('');
    wrapper.find('#stateEmail').simulate('change', {target: {value: 'test@test.com'}});
    expect(wrapper.find('#stateEmail').prop('value')).toEqual('test@test.com');
  });

  it('password input', () => {
    expect(wrapper.find('#statePassword').prop('value')).toEqual('');
    wrapper.find('#statePassword').simulate('change', {target: {value: 'testPassword'}});
    expect(wrapper.find('#statePassword').prop('value')).toEqual('testPassword');
  });

  describe('login button', () => {
    it('should fire login', () => {
      wrapper.find('#stateEmail').simulate('change', {target: {value: 'kjhkjh'}});
      wrapper.find('#statePassword').simulate('change', {target: {value: 'kbjkb'}});
      wrapper.find('.login-submit-button').simulate('click', {preventDefault: () => true});

      expect(wrapper.find('.error-msg').prop('value')).toEqual(undefined);
    })
  })

});
