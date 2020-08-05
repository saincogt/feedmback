import React from 'react';

const Landing = () => (
	<section className='landing'>
		<div className='dark-overlay'>
			<div className='landing-inner'>
				<h1 className='landing-title'>FeedMBack</h1>
				<p className='lead'>
					Send survey emails, collect feedback from your users
				</p>
				<div className='buttons'>
					<a href='/auth/google' className='btn btn-light'>
						Login With Google
					</a>
				</div>
			</div>
		</div>
	</section>
);

export default Landing;
