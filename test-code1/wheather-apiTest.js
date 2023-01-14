const http = require("https");

const options = {
	"method": "GET",
	"hostname": "currency-converter5.p.rapidapi.com",
	"port": null,
	"path": "/currency/convert?format=json&from=AUD&to=CAD&amount=1",
	"headers": {
		"X-RapidAPI-Key": "da9005220amshf55cec30c13af8cp1cdacejsn8f87a44189a4",
		"X-RapidAPI-Host": "currency-converter5.p.rapidapi.com",
		"useQueryString": true
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();