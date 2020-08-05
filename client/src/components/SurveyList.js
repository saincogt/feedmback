import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../actions';

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
						<div>Yes: {survey.yes}</div>
						<div>No: {survey.no}</div>
					</div>
				</div>
			);
		});
	};
	return renderSurveys();
};
const mapStateToProps = ({ surveys }) => ({ surveys });
export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
