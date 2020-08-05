import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import * as actions from '../actions';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import './App.css';
import AppBar from './AppBar';

const App = ({ fetchUser, auth }) => {
	useEffect(() => {
		fetchUser();
	}, [fetchUser]);
	return (
		<BrowserRouter>
			<div className='landing-page-container'>
				<AppBar />
				<Switch>
					<Route exact path='/' component={Landing} />
					<Route path='/surveys/new' component={SurveyNew} />
					<Route exact path='/surveys' component={Dashboard} />
					{auth && <Redirect to='/surveys' />}
				</Switch>
			</div>
		</BrowserRouter>
	);
};

const mapStateToProps = ({ auth }) => ({
	auth
});

export default connect(mapStateToProps, actions)(App);
