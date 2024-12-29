import { Box, Button, Typography } from '@mui/material';
import React from 'react'
import ReusableTable from '../ReusableTable';

const ApprovedCv = () => {
  // Example data
  const rows = [
    { id: 1, name: "Apple", calories: 52, fat: 0.2, carbs: 14, protein: 0.3 },
    { id: 2, name: "Banana", calories: 89, fat: 0.3, carbs: 23, protein: 1.1 },
    { id: 3, name: "Orange", calories: 47, fat: 0.1, carbs: 12, protein: 0.9 },
  ];

  // Column definitions
  const columns = [
    { id: "nic", label: "NIC", numeric: false },
    { id: "name", label: "Name", numeric: true },
    { id: "mobile", label: "Mobile number", numeric: true },
    { id: "cv", label: "CV Fror", numeric: true },
    { id: "district", label: "District", numeric: true },
    { id: "application date", label: "Application date", numeric: true },
    {
      id: "lifecycle",
      label: "Life cycle",
      numeric: false,
      renderCell: (row) => (
        <Button
          color="primary"
          variant="contained"
          onClick={() => alert(`Editing ${row.name}`)}
        >
          Life cycle
        </Button>
      ),
    },
    {
      id: "edit",
      label: "Edit",
      numeric: false,
      renderCell: (row) => (
        <Button
          color="primary"
          variant="contained"
          onClick={() => alert(`Editing ${row.name}`)}
        >
          Edit
        </Button>
      ),
    },
    {
      id: "approve",
      label: "Approve",
      numeric: false,
      renderCell: (row) => (
        <Button
          color="success"
          variant="contained"
          onClick={() => alert(`Editing ${row.name}`)}
        >
          Approve
        </Button>
      ),
    },
    {
      id: "decline",
      label: "Decline",
      numeric: false,
      renderCell: (row) => (
        <Button
          color="error"
          variant="contained"
          onClick={() => alert(`Editing ${row.name}`)}
        >
          Decline
        </Button>
      ),
    },
    {
      id: "viewcv",
      label: "View CV",
      numeric: false,
      renderCell: (row) => (
        <Button
          color="primary"
          variant="contained"
          onClick={() => alert(`Editing ${row.name}`)}
        >
          View CV
        </Button>
      ),
    },
  ];

  return (
    <Box
      sx={{
        padding: 7,
        maxWidth: "1250px",
        margin: "0 auto",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      {" "}
      <Typography
        sx={{
          textAlign: "left",
          color: "#4C585B",
          fontSize: 24,
          marginLeft: 7,
        }}
      >
        Approve CVs (CVs to be approved)
      </Typography>
      <ReusableTable rows={rows} columns={columns} title="Nutrition Table" />
    </Box>
  );
}

export default ApprovedCv