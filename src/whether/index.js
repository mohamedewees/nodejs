var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api.meteomatics.com/2023-01-14T00:00:00ZP1D:PT1H/t_2m:C/29.943427,31.018952/csv?model=mix',
  'headers': {
    'Authorization': 'Basic ZXdlZXNfZXdlZXM6aGhXODB4UDQzUg=='
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
