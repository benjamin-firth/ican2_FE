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
});
