import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ReusableTable from "../ReusableTable";

const AllInterviews = () => {

    const interviews = [
      {
        interviewLabel: "Software Developer Intern Interview",
        dateTime: "2025-01-10 10:30 AM",
        location: "Room 302, Tech Building",
      },
      {
        interviewLabel: "Data Analyst Position Interview",
        dateTime: "2025-01-11 02:00 PM",
        location: "Room 208, Innovation Center",
      },
      {
        interviewLabel: "Project Manager Role Interview",
        dateTime: "2025-01-12 09:00 AM",
        location: "Room 101, Corporate Wing",
      },
      {
        interviewLabel: "UI/UX Designer Interview",
        dateTime: "2025-01-13 01:00 PM",
        location: "Room 405, Design Studio",
      },
      {
        interviewLabel: "Marketing Specialist Interview",
        dateTime: "2025-01-14 11:15 AM",
        location: "Room 303, Marketing Department",
      },
    ];


  const rows = interviews.map((scheme) => ({
    interviewLabel: scheme.interviewLabel,
    dateTime: scheme.dateTime,
    location: scheme.location,
  }));

  const columns = [
    { id: "interviewLabel", label: "INTERVIEW LABEL", numeric: false },
    { id: "dateTime", label: "DATE TIME", numeric: true },
    { id: "recurring", label: "Recurring", numeric: true },

    {
      id: "edit",
      label: "Edit",
      numeric: false,
      renderCell: (row) => (
        <Button
          color="primary"
          variant="contained"
          onClick={() => alert(`View ${row.name}`)}
        >
          EDIT
        </Button>
      ),
    },
    {
      id: "action",
      label: "View",
      numeric: false,
      renderCell: (row) => (
        <Button
          color="primary"
          variant="contained"
          onClick={() => alert(`View ${row.name}`)}
        >
          VIEW
        </Button>
      ),
    },
    {
      id: "delete",
      label: "Delete",
      numeric: false,
      renderCell: (row) => (
        <Button
          color="error"
          variant="contained"
          onClick={() => alert(`Delete ${row.name}`)}
        >
          Delete
        </Button>
      ),
    },
  ];


  return (
    <Box
      sx={{
        padding: 7,
        maxWidth: "1250px",
        margin: "30px auto",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 4,
        }}
      >
        <Typography
          sx={{
            textAlign: "left",
            color: "#4C585B",
            fontSize: 24,
          }}
        >
          All Interviews
        </Typography>
        <Button color="primary" variant="contained">
          Add new interview
        </Button>
        <Button color="primary" variant="contained">
          Shedule interview
        </Button>
      </Box>
      <ReusableTable rows={rows} columns={columns} />
    </Box>
  );
};

export default AllInterviews;
