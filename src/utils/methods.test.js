import React from 'react';
import { renderButtons, renderPreviews, getUser, checkSelected, showMessage, displayMentors } from './methods';
import { fetchData } from './apiCalls';

describe('Methods', () => {

  it('should renderButtons', () => {
    const mockButtons = [
      {nav: '/home', name: 'home'},
      {nav: '/profile', name: 'profile'}
    ];

    expect(renderButtons(mockButtons).length).toBe(2)
  });

  it('should renderPreviews', () => {
    const mockConversations = [{senderId: 2, recipientId: 1}, {senderId: 1, recipientId: 2}];

    expect(renderPreviews(mockConversations, 1).length).toBe(2);
  });

  it('should getUser', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve('pants')
      });
    });

    await getUser('kw@email.com');

    expect(window.fetch).toHaveBeenCalled();
  });

  describe('showMessage', () => {
    let mockMessage;
    let mockOtherMessenger;
    let mockCurrentUser;

    it('should return with sender class', () => {
      mockMessage = {
        userId: 2,
        body: 'this is a message'
      };

      mockOtherMessenger = {
        id: 1,
        pic: 'url'
      };

      mockCurrentUser = {
        profile: {
          image: 'url'
        }
      };

      expect(showMessage(mockMessage, mockOtherMessenger, mockCurrentUser)).toEqual(<section className="message sender"><p>this is a message</p><img src="url" /></section>);
    });

    it('should return with other class', () => {
      mockMessage = {
        userId: 1,
        body: 'this is a message'
      };

      mockOtherMessenger = {
        id: 1,
        pic: 'url'
      };

      mockCurrentUser = {
        profile: {
          image: 'url'
        }
      };

      expect(showMessage(mockMessage, mockOtherMessenger, mockCurrentUser)).toEqual(<section className="message other"><img src="url" /><p>this is a message</p></section>);
    });
  });

  describe('checkSelected', () => {
    it('should return with an empty string', async () => {

      expect(checkSelected('/profile', '/home')).toEqual('');
    });

    it('should return with selected', async () => {

      expect(checkSelected('/profile', '/profile')).toEqual('selected');
    });
  });

  it('should displayMentors', () => {
    const mockMentors = [{name: 'pants', id: 1}, {name: 'shirt', id: 2}]

    expect(displayMentors(mockMentors).length).toEqual(2);
  });

});
