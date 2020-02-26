import { fetchData } from './apiCalls';

describe('api', () => {
  describe('fetchData', () => {
    const mockEmail = 'bf@email.com';
    const mockBody = {"query": "{users(email: \""+ mockEmail + "\") {id name email mentor profile {gender aboutMe image fieldOfInterest} mentorProfile {fieldOfKnowledge experienceLevel workDayQuestion enjoymentQuestion teachingPointsQuestion adviceQuestion} location {city state}}}"};

    const mockResponse = {id: 3, name: 'Ben', email: 'bf@email.com', mentor: '', profile: {gender: 'He/Him', aboutMe: 'Eh', image: 'image', fieldOfInterest: 'none'}, mentorProfile: {fieldOfKnowledge: 'none', experienceLevel: 'Advanced', workDayQuestion: 'none', enjoymentQuestion: 'none', teachingPointsQuestion: 'none', adviceQuestion: 'none'}, location: {city: 'Olympia', state: 'WA'}}

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });

    it('should call fetch POST with the correct param', () => {
      fetchData(mockBody);
      expect(window.fetch).toHaveBeenCalled();
    });

    it('should return an object', () => {
      expect(fetchData()).resolves.toEqual(mockResponse);
    })

    it('should throw an error if response is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });

      expect(fetchData()).rejects.toEqual({ error: 'error fetching data' });
    });
  });
});
