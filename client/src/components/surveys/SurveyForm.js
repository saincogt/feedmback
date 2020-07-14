import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

const SurveyForm = ({ handleSubmit, onSurveySubmit }) => {
	const renderFields = () => {
		return _.map(formFields, ({ name, label }) => (
			<Field
				key={name}
				component={SurveyField}
				type='text'
				label={label}
				name={name}
			/>
		));
	};
	return (
		<div>
			<form onSubmit={handleSubmit(onSurveySubmit)}>
				{renderFields()}
				<Link to='/surveys' className='red btn-flat white-text'>
					Cancel
				</Link>
				<button
					type='submit'
					className='teal btn-flat right white-text'
				>
					Next
					<i className='material-icons right'>done</i>
				</button>
			</form>
		</div>
	);
};

const validate = (values) => {
	const errors = {};
	_.each(formFields, ({ name }) => {
		if (!values[name]) errors[name] = `Please provide a ${name}`;
	});
	errors.emails = validateEmails(values.emails || '');
	return errors;
};

export default reduxForm({
	validate,
	form: 'surveyForm',
	destroyOnUnmount: false
})(SurveyForm);
