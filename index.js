const clientId = 'de7edba624bff2667c00';
const clientSecret = '3f14b8442fe302ad556351ffc61126ec';
const baseUrl = 'https://api.artsy.net/api/';

const data = {
  client_id: clientId,
  client_secret: clientSecret
}

const getToken = () => {
  fetch(`${baseUrl}/tokens/xapp_token`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data["token"]);
      return data["token"];
    })
};

const tokenPromise = getToken();
console.log(token);


const artwork = document.getElementById('artwork');
const shuffleBtn = document.getElementById('shuffle-btn');
const shareBtn = document.getElementById('share-btn');

const changeImage = () => {
  console.log('change image soon')
};

shuffleBtn.addEventListener('click', changeImage);


console.log('Hello')


// curl -X GET "https://api.artsy.net/api/genes/hugs-and-kisses" -H "accept: application/json" -H "X-Access-Token: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1ZGZiZmJlNTZlMDEwYzAwMGU1ZWI5NDQiLCJzYWx0X2hhc2giOiI0ZWJkMWE2MzBiOWMwYjZiYTdlYWI5YWU0ZGUxMWM3MyIsInJvbGVzIjoidXNlciIsInBhcnRuZXJfaWRzIjpbXSwiZXhwIjoyMzcxMTIzMDE3LCJpYXQiOjE1ODIxMTgyMTcsImF1ZCI6IjUzZmYxYmNjNzc2ZjcyNDBkOTAwMDAwMCIsImlzcyI6IkdyYXZpdHkiLCJqdGkiOiI1ZTRkMzU0OTdhNDA0YTAwMGU2MWM5MDUifQ.Eftl_BMLp5mbGqzRfJvFUd3ExZ22QuFrNn5Wpq2kMpY"
