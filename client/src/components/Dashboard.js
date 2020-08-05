import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import SurveyList from './SurveyList';

const Dashboard = () => (
	<Layout className='layout'>
		<SurveyList />
		<div className='fixed-action-btn'>
			<Link to='/surveys/new' className='btn-floating btn-large red'>
				<i className='material-icons'>add</i>
			</Link>
		</div>
	</Layout>
);

export default Dashboard;
