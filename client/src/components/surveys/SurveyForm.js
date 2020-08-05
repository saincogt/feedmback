import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link, withRouter } from 'react-router-dom';
import { Typography, Button, Form } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import _ from 'lodash';
import { Layout } from 'antd';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

const { Title } = Typography;

const SurveyForm = ({ handleSubmit, onSurveySubmit, history }) => {
	const [form] = Form.useForm();
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
		<Layout className='layout'>
			<Title level={3}>Create new survey</Title>
			<form onSubmit={handleSubmit(onSurveySubmit)}>
				{renderFields()}
				<div className='button-group'>
					<Button
						component={Link}
						onClick={() => history.push('/surveys')}
					>
						Cancel
					</Button>
					<Button type='primary' htmlType='submit'>
						Next
						<CheckOutlined />
					</Button>
				</div>
			</form>
		</Layout>
	);
};

const validate = (values) => {
	const errors = {};
	_.each(formFields, ({ name }) => {
		if (!values[name]) errors[name] = `Please provide a ${name}`;
	});
	errors.recipients = validateEmails(values.recipients || '');
	return errors;
};

export default reduxForm({
	validate,
	form: 'surveyForm',
	destroyOnUnmount: false
})(withRouter(SurveyForm));
