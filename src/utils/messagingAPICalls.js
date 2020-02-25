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
