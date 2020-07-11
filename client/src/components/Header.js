import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
	console.log(auth);
	const renderContent = () => {
		switch (auth) {
			case null:
				return;
			case false:
				return (
					<li>
						<a href='/auth/google'>Login With Google</a>
					</li>
				);
			default:
				return (
					<li>
						<a href='/api/logout'>Logout</a>
					</li>
				);
		}
	};
	return (
		<nav>
			<div className='nav-wrapper'>
				<Link to={auth ? '/surveys' : '/'} className='left brand-logo'>
					FeedMBack
				</Link>
				<ul id='nav-mobile' className='right'>
					{renderContent()}
				</ul>
			</div>
		</nav>
	);
};

const mapStateToProps = ({ auth }) => ({
	auth
});

export default connect(mapStateToProps)(Header);
