import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../actions';

const SurveyList = ({ surveys, fetchSurveys }) => {
	useEffect(() => {
		fetchSurveys();
	}, [fetchSurveys]);

	const renderSurveys = () => {
		return surveys.reverse().map((survey) => {
			return (
				<div class='card darken-1 blue-grey' key={survey.id}>
					<div class='card-content white-text'>
						<span class='card-title'>{survey.title}</span>
						<p>{survey.body}</p>
						<p className='right'>
							Sent On:{' '}
							{new Date(survey.dateSent).toLocaleDateString()}
						</p>
					</div>
					<div class='card-action'>
						<a>Yes: {survey.yes}</a>
						<a>No: {survey.no}</a>
					</div>
				</div>
			);
		});
	};
	return renderSurveys();
};
const mapStateToProps = ({ surveys }) => ({ surveys });
export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
