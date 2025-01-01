// src/components/InterviewForm.js
import React, { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';
import API from '../../api';

const InterviewForm = ({ selectedInterview, onSubmit }) => {
  const [formData, setFormData] = useState({ label: '', date: '', location: '', edit: '', action: '', delete: '' });

  useEffect(() => {
    if (selectedInterview) setFormData(selectedInterview);
  }, [selectedInterview]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData._id) await API.put(`/${formData._id}`, formData);
    else await API.post('/', formData);
    onSubmit();
    setFormData({ label: '', date: '', location: '', edit: '', action: '', delete: '' });
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField label="Label" name="label" value={formData.label} onChange={handleChange} fullWidth margin="normal" />
      <TextField type="date" name="date" value={formData.date} onChange={handleChange} fullWidth margin="normal" />
      <TextField label="Location" name="location" value={formData.location} onChange={handleChange} fullWidth margin="normal" />
      <TextField label="Edit" name="edit" value={formData.edit} onChange={handleChange} fullWidth margin="normal" />
      <TextField label="Action" name="action" value={formData.action} onChange={handleChange} fullWidth margin="normal" />
      <TextField label="Delete" name="delete" value={formData.delete} onChange={handleChange} fullWidth margin="normal" />
      <Button type="submit" variant="contained" color="primary">{formData._id ? 'Update' : 'Add'} Interview</Button>
    </Box>
  );
};

export default InterviewForm;
