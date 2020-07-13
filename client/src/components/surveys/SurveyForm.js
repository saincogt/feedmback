import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
	{ label: 'Survey Title', name: 'title' },
	{ label: 'Survey Line', name: 'subject' },
	{ label: 'Email Body', name: 'body' },
	{ label: 'Recipient List', name: 'emails' }
];

const SurveyForm = ({ handleSubmit }) => {
	const renderFields = () => {
		return _.map(FIELDS, ({ name, label }) => (
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
			<form onSubmit={handleSubmit((values) => console.log(values))}>
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
	_.each(FIELDS, ({ name }) => {
		if (!values[name]) errors[name] = `Please provide a ${name}`;
	});
	errors.emails = validateEmails(values.emails || '');
	return errors;
};

export default reduxForm({
	validate,
	form: 'surveyForm'
})(SurveyForm);
