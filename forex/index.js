var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api.fastforex.io/fetch-multi?from=USD&to=EGP&api_key=70f4c9704c-d098902118-rogvjq',
  'headers': {
    'Authorization': 'Basic ZXdlZXNfZXdlZXM6aGhXODB4UDQzUg=='
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  const results = JSON.parse(response.body);

  console.log(results);
});