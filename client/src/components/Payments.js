import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Payments = ({ handleToken }) => (
	<StripeCheckout
		label='Pay Now'
		name='FeedMBack'
		stripeKey={process.env.REACT_APP_STRIPE_PK}
		// description={`Your total is $${price}`}
		// amount={priceForStripe}
		currency='AUD'
		country='Australia'
		panelLabel='Pay Now'
		token={(token) => handleToken(token)}
	>
		<button className='btn'>Add Credits</button>
	</StripeCheckout>
);

export default connect(null, actions)(Payments);
