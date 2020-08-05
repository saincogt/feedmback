import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Typography } from 'antd';
import { fetchSurveys } from '../actions';

const { Title } = Typography;

const SurveyList = ({ surveys, fetchSurveys }) => {
	useEffect(() => {
		fetchSurveys();
	}, [fetchSurveys]);

	const renderSurveys = () => {
		return surveys.reverse().map((survey, idx) => {
			return (
				<div className='card darken-1 blue-grey' key={idx}>
					<div className='card-content white-text'>
						<span className='card-title'>{survey.title}</span>
						<p>{survey.body}</p>
						<p className='right'>
							Sent On:{' '}
							{new Date(survey.dateSent).toLocaleDateString()}
						</p>
					</div>
					<div className='card-action'>
						<div className='card-action-selection'>
							Yes: {survey.yes}
						</div>
						<div className='card-action-selection'>
							No: {survey.no}
						</div>
					</div>
				</div>
			);
		});
	};
	return (
		<div>
			<Title level={3}>My Dashboard</Title>
			<p>
				The surveys you have sent will be listed below along with your
				users' reactions to the survey. You will be able to create a new
				survey by clicking the button bottom right. Each survey will
				cost you 1 credit.
			</p>
			<p>
				* Please use following credit card to add credits for testing:
			</p>
			<p>4242 4242 4242 4242</p>
			<p>01/23 CVV: 123</p>
			{renderSurveys()}
		</div>
	);
};
const mapStateToProps = ({ surveys }) => ({ surveys });
export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
