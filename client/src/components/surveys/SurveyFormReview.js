import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Typography } from 'antd';
import { Layout } from 'antd';
import _ from 'lodash';
import formFields from './formFields';
import * as actions from '../../actions';

const { Title } = Typography;

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
	const reviewFields = _.map(formFields, ({ name, label }) => {
		return (
			<div key={name}>
				<label>{label}</label>
				<div>{formValues[name]}</div>
			</div>
		);
	});
	return (
		<Layout className='layout'>
			<Title level={3}>Please confirm your entries</Title>
			{reviewFields}
			<div className='button-group'>
				<button
					className='yellow darken-3 white-text btn-flat'
					onClick={onCancel}
				>
					Back
				</button>
				<button
					className='green white-text btn-flat right'
					onClick={() => submitSurvey(formValues, history)}
				>
					Send Survey
					<i className='material-icons right'>email</i>
				</button>
			</div>
		</Layout>
	);
};

const mapStateToProps = (state) => ({
	formValues: state.form.surveyForm.values
});

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
