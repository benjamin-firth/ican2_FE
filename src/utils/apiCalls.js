export const fetchData = (body) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    }
  };

  return fetch('https://ican2-be-rails.herokuapp.com/api/v1/graphql', options)
  .then(response => {
    if (!response.ok) {
        return ({ error: 'error fetching data' });
      }
    return response.json();
  });
}
