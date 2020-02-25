export const createUser = (mutation) => {
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
  });
}
