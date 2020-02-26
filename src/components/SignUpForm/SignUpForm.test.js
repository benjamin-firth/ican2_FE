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

    it('state input', () => {
      expect(wrapper.find('#stateId').prop('value')).toEqual('')
      wrapper.find('#stateId').simulate('change', {target: {value: 'test state'}})
      // wrapper.update()
      expect(wrapper.find('#stateId').prop('value')).toEqual('test state')
    });

    it('city input', () => {
      expect(wrapper.find('#cityId').prop('value')).toEqual('')
      wrapper.find('#cityId').simulate('change', {target: {value: 'test city'}})
      // wrapper.update()
      expect(wrapper.find('#cityId').prop('value')).toEqual('test city')
    });

    it('pronouns input', () => {
      expect(wrapper.find('#stateGender').prop('value')).toEqual('')
      wrapper.find('#stateGender').simulate('change', {target: {value: 'They/Them'}})
      // wrapper.update()
      expect(wrapper.find('#stateGender').prop('value')).toEqual('They/Them');
    });

    it('about input', () => {
      expect(wrapper.find('#stateAbout').prop('value')).toEqual('')
      wrapper.find('#stateAbout').simulate('change', {target: {value: 'test about me'}})
      // wrapper.update()
      expect(wrapper.find('#stateAbout').prop('value')).toEqual('test about me');
    });

    it('mentorbool input', () => {
      expect(wrapper.find('#stateMentorBool').prop('value')).toEqual(false)
      wrapper.find('#stateMentorBool').simulate('change', {target: {value: true}})
      // wrapper.update()
      expect(wrapper.find('#stateMentorBool').prop('value')).toEqual(true);
    });

    it('stateKnowledgeField input', () => {
      wrapper.find('#stateMentorBool').simulate('change', {target: {value: true}})
      expect(wrapper.find('#stateKnowledgeField').prop('value')).toEqual('')
      wrapper.find('#stateKnowledgeField').simulate('change', {target: {value: 'Agriculture'}})
      // wrapper.update()
      expect(wrapper.find('#stateKnowledgeField').prop('value')).toEqual('Agriculture')
    });

    it('stateExpertise input', () => {
      wrapper.find('#stateMentorBool').simulate('change', {target: {value: true}})
      expect(wrapper.find('#stateExpertise').prop('value')).toEqual('')
      wrapper.find('#stateExpertise').simulate('change', {target: {value: 'Intermediate'}})
      // wrapper.update()
      expect(wrapper.find('#stateExpertise').prop('value')).toEqual('Intermediate')
    });

    it('workday input', () => {
      wrapper.find('#stateMentorBool').simulate('change', {target: {value: true}})
      expect(wrapper.find('#stateWorkDay').prop('value')).toEqual('')
      wrapper.find('#stateWorkDay').simulate('change', {target: {value: 'test work day'}})
      // wrapper.update()
      expect(wrapper.find('#stateWorkDay').prop('value')).toEqual('test work day')
    });

    it('enjoyQ input', () => {
      wrapper.find('#stateMentorBool').simulate('change', {target: {value: true}})
      expect(wrapper.find('#stateEnjoyQ').prop('value')).toEqual('')
      wrapper.find('#stateEnjoyQ').simulate('change', {target: {value: 'test stateEnjoyQ'}})
      // wrapper.update()
      expect(wrapper.find('#stateEnjoyQ').prop('value')).toEqual('test stateEnjoyQ')
    });

    it('adviceQ input', () => {
      wrapper.find('#stateMentorBool').simulate('change', {target: {value: true}})
      expect(wrapper.find('#adviceQ').prop('value')).toEqual('')
      wrapper.find('#adviceQ').simulate('change', {target: {value: 'test adviceQ'}})
      // wrapper.update()
      expect(wrapper.find('#adviceQ').prop('value')).toEqual('test adviceQ')
    });

    it('adviceQ input', () => {
      wrapper.find('#stateMentorBool').simulate('change', {target: {value: true}})
      expect(wrapper.find('#stateAdviceQ').prop('value')).toEqual('')
      wrapper.find('#stateAdviceQ').simulate('change', {target: {value: 'test advice'}})
      // wrapper.update()
      expect(wrapper.find('#stateAdviceQ').prop('value')).toEqual('test advice')
    });
  });
});
