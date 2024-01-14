const request = new XMLHttpRequest();
const apiUrl = 'https://api.gestaoclick.com/situacoes_ordens_servicos';

request.open('GET', apiUrl, true);

// Replace with actual credentials
const accessToken = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const secretAccessToken = 'YYYYYYYYYYYYYYYYYYYYYYYYYYYYYY';

// Add the necessary headers
request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Authorization', `Bearer ${accessToken}`);

// State change handler
request.onreadystatechange = function () {
  if (request.readyState === 4) {
    if (request.status >= 200 && request.status < 300) {
      console.log('Request successful');
      console.log('Status:', request.status);
      console.log('Headers:', request.getAllResponseHeaders());

      // Parse JSON response if content type is JSON
      if (request.getResponseHeader('Content-Type') === 'application/json') {
        console.log('Body:', JSON.parse(request.responseText));
      } else {
        console.log('Body:', request.responseText);
      }
    } else {
      console.error('Request failed with status:', request.status);
      console.log('Body:', request.responseText);
    }
  }
};

// Error handler
request.onerror = function () {
  console.error('Network error while trying to make the request.');
};

// Timeout handler
request.timeout = 5000; // 5-second timeout
request.ontimeout = function () {
  console.error('Request timed out.');
};

// Send the request
request.send();
