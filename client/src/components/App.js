import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './Header';
import 'materialize-css/dist/css/materialize.min.css';
import * as actions from '../actions';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

const App = ({ fetchUser }) => {
	useEffect(() => {
		fetchUser();
	}, [fetchUser]);
	return (
		<BrowserRouter>
			<div className='container'>
				<Header />
				<Route exact path='/' component={Landing} />
				<Route exact path='/surveys' component={Dashboard} />
				<Route path='/surveys/new' component={SurveyNew} />
			</div>
		</BrowserRouter>
	);
};

export default connect(null, actions)(App);
