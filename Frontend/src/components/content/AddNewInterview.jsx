import { Box, Typography } from '@mui/material';
import React from 'react'
import ReusableForm from '../ReusableForm';

const AddNewInterview = () => {

    const onSubmit = async (data) => {
      console.log(data);
    };

    const fields = [
      {
        name: "label",
        label: "INTERVIEW LABEL",
        type: "text",
        rules: { required: "Interview label is required" },
        gridSize: { md: 12 },
      },
      {
        name: "datetime",
        label: "INTERVIEW DATE & TIME",
        type: "date",
        rules: { required: "Interview datetime is required" },
        gridSize: { md: 12 },
      },
      {
        name: "scheme",
        label: "SCHEME",
        type: "select",
        options: [
          { value: "scheme_1", label: "Scheme_1" },
          { value: "scheme_2", label: "Scheme_2" },
        ],
        rules: { required: "Scheme is required" },
      },
      {
        name: "location",
        label: "INTERVIEW LOCATION",
        type: "text",
        rules: { required: "Interview location is required" },
        gridSize: { md: 12 },
      },
      {
        name: "notes",
        label: "NOTES",
        type: "text",
        rules: { required: "Notes is required" },
        gridSize: { md: 12 },
      },
    ];
  return (
    <Box
      sx={{
        padding: 7,
        maxWidth: "1000px",
        margin: "0 auto",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <Typography
        sx={{
          textAlign: "left",
          mb: 4,
          color: "#2e2e2e",
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        Add New Interview
      </Typography>
      <ReusableForm fields={fields} onSubmit={onSubmit} />
    </Box>
  );
}

export default AddNewInterview