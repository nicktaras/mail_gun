const mailgun = require("mailgun-js");

const API_KEY = 'YourAPIKey';
// If you have configured your domain, add it here e.g. mywebsite.com
// If test driving Mail Gun you should have a sandbox address like this: 
// 'sandbox04453tre565649b11545.mailgun.org' (Please note, this is made up - use your own unique address)
const DOMAIN = 'sandboxYourUniqueAddressKey.mailgun.org';
const mg = mailgun({
	apiKey: API_KEY,
	domain: DOMAIN
});
const data = {
	from: 'Excited User <me@samples.mailgun.org>',
	to: 'test@test.com',
	subject: 'Hello',
	text: 'Testing some Mailgun awesomness!'
};
mg.messages().send(data, function (error, body) {
	console.log(error, body);
});