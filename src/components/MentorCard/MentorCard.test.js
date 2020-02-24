import React from 'react';
import { shallow } from 'enzyme';
import MentorCard from './MentorCard';

describe('MentorCard', () => {
  let wrapper;
  let mockMentor = { 
    id: 1,
    name: 'mockName',
    profile: {
      image: 'mockUrl',
      gender: 'He / Him',
      aboutMe: 'mock aboutMe'
    },
    mentorProfile: {
      fieldOfKnowledge: 'mock field'
    },
    location: {
      city: 'mockCity',
      state: 'mockState'
    }
  }

  beforeEach(() => {
    wrapper = shallow( <MentorCard mentor={mockMentor} />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
