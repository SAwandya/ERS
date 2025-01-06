import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReusableTable from "../ReusableTable";
import axios from "axios";
import ReusablePopup from "../ReusablePopup";

const AllInterviews = () => {
  const [interviews, setInterviews] = useState([]); // State to store fetched data
  const [loading, setLoading] = useState(true); // State to track loading
  const [error, setError] = useState(""); // State to handle errors

  const [open, setOpen] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
  }

  const fields = [
    {
      name: "interview",
      label: "SELECT INTERVIEW",
      type: "select",
      options: [
        { value: "interview_01", label: "Interview 01" },
        { value: "interview_02", label: "Interview 02" },
      ],
      rules: { required: "Scheme is required" },
    },
    {
      name: "scheme",
      label: "SELECT SCHEME",
      type: "select",
      options: [
        { value: "scheme_01", label: "Scheme 01" },
        { value: "scheme_02", label: "Scheme 02" },
      ],
      rules: { required: "Scheme is required" },
    },
  ];

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Make a GET request to your API
        const response = await axios.get("http://localhost:3000/api/interview");
        setInterviews(response.data); // Update state with fetched data
        console.log(response.data);
        setLoading(false); // Set loading to false
      } catch (err) {
        setError("Error fetching data"); // Handle errors
        setLoading(false);
      }
    };

    fetchUsers(); // Call the function
  }, []); // Empty dependency array ensures this runs only once

  const rows = interviews.map((scheme) => ({
    interviewLabel: scheme.label,
    date: scheme.date ? new Date(scheme.date).toDateString() : "",
    time: scheme.time,
    location: scheme.location,
  }));

  const columns = [
    { id: "interviewLabel", label: "INTERVIEW LABEL", numeric: false },
    { id: "date", label: "DATE", numeric: true },
    { id: "time", label: "TIME", numeric: true },
    { id: "location", label: "LOCATION", numeric: true },

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
        <Button
          color="primary"
          onClick={() => setOpen(true)}
          variant="contained"
        >
          Shedule interview
        </Button>
      </Box>
      <ReusableTable rows={rows} columns={columns} />
      <ReusablePopup open={open} onClose={() => setOpen(false)} fields={fields} onSubmit={onSubmit} />
    </Box>
  );
};

export default AllInterviews;
