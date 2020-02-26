import React from 'react';
import { shallow } from 'enzyme';
import FilterBox from './FilterBox';

jest.mock("react-redux", () => ({
  useSelector: () => 'mockState',
  useDispatch: () => jest.fn()
}));

describe('FilterBox', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <FilterBox />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state with field dropdown', () => {
    expect(wrapper.find('#fieldInput').prop('value')).toEqual('')
    wrapper.find('#fieldInput').simulate('change', {target: {value: 'test field'}})

    expect(wrapper.find('#fieldInput').prop('value')).toEqual('test field')
  });

  it('should update state with state dropdown', () => {
    expect(wrapper.find('#stateInput').prop('value')).toEqual('')
    wrapper.find('#stateInput').simulate('change', {target: {value: 'test state'}})

    expect(wrapper.find('#stateInput').prop('value')).toEqual('test state')
  });

  it('should update state with name dropdown', () => {
    expect(wrapper.find('#nameInput').prop('value')).toEqual('')
    wrapper.find('#nameInput').simulate('change', {target: {value: 'test name'}})

    expect(wrapper.find('#nameInput').prop('value')).toEqual('test name')
  });
});
