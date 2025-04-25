const apiKey = '57de03a4-63f1-4526-9d96-aa756a708b12';

fetch('https://api.buttondown.email/v1/subscribers', {
  method: 'GET',
  headers: {
    'Authorization': `Token ${apiKey}`,
    'Content-Type': 'application/json'
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Fetched data:', data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
