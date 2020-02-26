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

  let mockMentor2 = {
    id: 1,
    name: 'mockName',
    profile: {
      image: 'mockUrl',
      gender: 'none-specified',
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

  it('should match the snapshot', () => {
    wrapper = shallow( <MentorCard mentor={mockMentor} />)

    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot when gender is no specified', () => {
    wrapper = shallow( <MentorCard mentor={mockMentor2} />)

    expect(wrapper).toMatchSnapshot();
  });

});
