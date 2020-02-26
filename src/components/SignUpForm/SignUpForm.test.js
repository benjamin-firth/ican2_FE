import "@testing-library/jest-dom/extend-expect";
import React from 'react';
import { render, fireEvent } from "@testing-library/react";
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

  describe('Inputs', () => {
    it('name input', () => {
      expect(wrapper.find('#stateName').prop('value')).toEqual('')
      wrapper.find('#stateName').simulate('change', {target: {value: 'test name'}})
      // wrapper.update()
      expect(wrapper.find('#stateName').prop('value')).toEqual('test name')
    });

    it('email input', () => {
      expect(wrapper.find('#stateEmail').prop('value')).toEqual('')
      wrapper.find('#stateEmail').simulate('change', {target: {value: 'test email'}})
      // wrapper.update()
      expect(wrapper.find('#stateEmail').prop('value')).toEqual('test email')
    });

    it('about input', () => {
      expect(wrapper.find('#stateAbout').prop('value')).toEqual('')
      wrapper.find('#stateAbout').simulate('change', {target: {value: 'test about me'}})
      // wrapper.update()
      expect(wrapper.find('#stateAbout').prop('value')).toEqual('test about me')
    });

    it('about input', () => {
      wrapper.find('#stateMentorBool').simulate('change', {target: {value: true}})
      expect(wrapper.find('#stateWorkDay').prop('value')).toEqual('')
      wrapper.find('#stateWorkDay').simulate('change', {target: {value: 'test work day'}})
      // wrapper.update()
      expect(wrapper.find('#stateWorkDay').prop('value')).toEqual('test work day')
    });

    it('about input', () => {
      wrapper.find('#stateMentorBool').simulate('change', {target: {value: true}})
      expect(wrapper.find('#stateEnjoyQ').prop('value')).toEqual('')
      wrapper.find('#stateEnjoyQ').simulate('change', {target: {value: 'test stateEnjoyQ'}})
      // wrapper.update()
      expect(wrapper.find('#stateEnjoyQ').prop('value')).toEqual('test stateEnjoyQ')
    });

    it('about input', () => {
      wrapper.find('#stateMentorBool').simulate('change', {target: {value: true}})
      expect(wrapper.find('#adviceQ').prop('value')).toEqual('')
      wrapper.find('#adviceQ').simulate('change', {target: {value: 'test adviceQ'}})
      // wrapper.update()
      expect(wrapper.find('#adviceQ').prop('value')).toEqual('test adviceQ')
    });

    it('about input', () => {
      wrapper.find('#stateMentorBool').simulate('change', {target: {value: true}})
      expect(wrapper.find('#stateAdviceQ').prop('value')).toEqual('')
      wrapper.find('#stateAdviceQ').simulate('change', {target: {value: 'test advice'}})
      // wrapper.update()
      expect(wrapper.find('#stateAdviceQ').prop('value')).toEqual('test advice')
    });
  });
});
