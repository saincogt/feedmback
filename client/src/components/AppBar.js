import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import Payments from './Payments';
import Logo from '../img/logo.svg';

const { Header } = Layout;

const AppBar = ({ auth }) => {
	const renderContent = () => {
		switch (auth) {
			case null:
			case false:
				return (
					<>
						<a href='/auth/google'>Login With Google</a>
					</>
				);
			default:
				return (
					<>
						<Payments />
						Credits: {auth.credits}
						<a href='/api/logout'>Logout</a>
					</>
				);
		}
	};
	return (
		<Header className='header'>
			<div>
				<Link to={auth ? '/surveys' : '/'} className='header-title'>
					<img src={Logo} alt='logo' className='logo' />
					FeedMBack
				</Link>
			</div>
			<div className='header-menu'>{renderContent()}</div>
		</Header>
	);
};

const mapStateToProps = ({ auth }) => ({
	auth
});

export default connect(mapStateToProps)(AppBar);
