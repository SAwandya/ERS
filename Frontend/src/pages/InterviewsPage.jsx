// src/pages/InterviewsPage.js
import React, { useState } from 'react';
import InterviewsTable from '../components/content/AllInterviews';
import InterviewsForm from '../components/content/NewInterviews';

const InterviewsPage = () => {
  const [selectedInterview, setSelectedInterview] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleEdit = (interview) => {
    setSelectedInterview(interview);
  };

  const handleFormSubmit = () => {
    setSelectedInterview(null);
    setRefresh(!refresh);
  };

  return (
    <div>
      <h1>Interviews Management</h1>
      <InterviewsForm selectedInterview={selectedInterview} onSubmit={handleFormSubmit} />
      <InterviewsTable onEdit={handleEdit} key={refresh} />
    </div>
  );
};

export default InterviewsPage;
