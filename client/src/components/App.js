import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './Header';
import 'materialize-css/dist/css/materialize.min.css';
import * as actions from '../actions';
import Landing from './Landing';

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

const App = ({ fetchUser }) => {
	useEffect(() => {
		fetchUser();
	}, [fetchUser]);
	return (
		<div className='container'>
			<BrowserRouter>
				<div>
					<Header />
					<Route exact path='/' component={Landing} />
					<Route exact path='/surveys' component={Dashboard} />
					<Route path='/surveys/new' component={SurveyNew} />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default connect(null, actions)(App);
