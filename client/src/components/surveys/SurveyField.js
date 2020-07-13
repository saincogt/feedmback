import React from 'react';

const SurveyField = ({ input, label, meta: { touched, error } }) => (
	<>
		<label htmlFor=''>{label}</label>
		<input {...input} style={{ marginBottom: '5px' }} />
		<div className='red-text' style={{ marginBottom: '10px' }}>
			{touched && error}
		</div>
	</>
);

export default SurveyField;
