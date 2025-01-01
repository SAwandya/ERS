// src/components/InterviewsTable.js
import React, { useEffect, useState } from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Button } from '@mui/material';
import API from '../../api';

const InterviewsTable = ({ onEdit }) => {
  const [interviews, setInterviews] = useState([]);

  const fetchInterviews = async () => {
    const response = await API.get('/');
    setInterviews(response.data);
  };

  const deleteInterview = async (id) => {
    await API.delete(`/${id}`);
    fetchInterviews();
  };

  useEffect(() => {
    fetchInterviews();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Interview Label</TableCell>
            <TableCell>Date Time</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Action</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {interviews.map((interview) => (
            <TableRow key={interview._id}>
              <TableCell>{interview.label}</TableCell>
              <TableCell>{new Date(interview.date).toLocaleDateString()}</TableCell>
              <TableCell>{interview.location}</TableCell>
              <TableCell>{interview.edit}</TableCell>
              <TableCell>{interview.action}</TableCell>
              <TableCell>{interview.delete}</TableCell>
              <TableCell>
                <Button onClick={() => onEdit(interview)} variant="contained" color="primary">Edit</Button>
                <Button onClick={() => deleteInterview(interview._id)} variant="contained" color="secondary">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default InterviewsTable;
