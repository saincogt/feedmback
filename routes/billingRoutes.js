const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecret);

module.exports = (app) => {
	app.post('/api/stripe', async (req, res) => {
		const charge = await stripe.charges.create({
			amount: 500,
			currency: 'AUD',
			description: '$5 for 5 credits',
			source: req.body.id
		});
		console.log(charge);
	});
};
