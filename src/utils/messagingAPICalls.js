export const findMatchingMessages = (currentUserId, otherMessengerId) => {
  const body = {"query": "{messages(sender: \""+ currentUserId + "\", recipient: \""+ otherMessengerId + "\") {body read userId}}"};

  const options = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    }
  };

  return fetch('https://ican2-be-rails.herokuapp.com/api/v1/graphql', options)
    .then(response => response.json())
}

export const findMessengerNamePic = otherMessengerId => {
  const body = {"query": "{users(id: \""+ otherMessengerId + "\") {name profile{image}}}"};

  const options = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    }
  };

  return fetch('https://ican2-be-rails.herokuapp.com/api/v1/graphql', options)
  .then(response => response.json())
}

export const createMessage = (otherMessengerId, currentUserId, message) => {
  const mutation = {
    query: "mutation {\n createMessage(input: {\n senderId: \"" + currentUserId + "\"\n recipientId: \"" + otherMessengerId + "\"\n body: \"" + message + "\"\n}) {\n message {\n body \n userId\n conversation {\n recipientId\n }\n }\n }\n }",
    variables: {}
  };

  const options = {
    method: 'POST',
    body: JSON.stringify(mutation),
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow'
  };

  return fetch('https://ican2-be-rails.herokuapp.com/api/v1/graphql', options)
  .then(response => {
    if (!response.ok) {
        throw Error('error retrieving user data');
      }
    return response.json();
  })
}

export const getAllUserConversations = (currentUserId) => {
  const body = {"query": "{conversations(userId: \""+ currentUserId + "\") {senderId recipientId}}"};

  const options = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    }
  };

  return fetch('https://ican2-be-rails.herokuapp.com/api/v1/graphql', options)
    .then(response => response.json())
}
