import React, { useState } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

const SurveyNew = () => {
	const [showReview, setShowReview] = useState(false);
	const renderContent = () =>
		showReview ? (
			<SurveyFormReview onCancel={() => setShowReview(false)} />
		) : (
			<SurveyForm onSurveySubmit={() => setShowReview(true)} />
		);
	return <div>{renderContent()}</div>;
};

export default SurveyNew;
