import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Payments = ({ handleToken }) => (
	<StripeCheckout
		label='Add Credit'
		name='FeedMBack'
		stripeKey={process.env.REACT_APP_STRIPE_PK}
		description={`$5 AUD for 5 Credits`}
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
