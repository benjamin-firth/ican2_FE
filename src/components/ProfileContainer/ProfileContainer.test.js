import React from 'react';
import { shallow } from 'enzyme';
import ProfileContainer from './ProfileContainer';

jest.mock("react-redux", () => ({
  useSelector: () => 'mockState',
  useDispatch: () => jest.fn()
}));

describe('ProfileContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <ProfileContainer />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
