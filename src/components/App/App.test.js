import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const mockState = {
  mentors: [{name: 'pants', id: 1}, {name: 'shirts', id: 2}],
  message: [{sender: 2, recipient: 1, body: 'hello'}, {sender: 1, recipient: 2, body: 'hello there'}]
}

jest.mock("react-redux", () => ({
  useSelector: () => mockState,
  useDispatch: () => jest.fn()
}));

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <App />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
