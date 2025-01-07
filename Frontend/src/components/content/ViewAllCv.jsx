import { Box, Typography, TextField, Button } from "@mui/material";
import Grid2 from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ReusableTable from "../ReusableTable";
import axios from "axios";
import ReusablePopup from "../ReusablePopup";

const ViewAllCv = () => {
  const [age, setAge] = React.useState("");
  const [users, setUsers] = useState([]); // State to store fetched data
  const [loading, setLoading] = useState(true); // State to track loading
  const [error, setError] = useState(""); // State to handle errors

  const [open, setOpen] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Make a GET request to your API
        const response = await axios.get("http://localhost:3000/api/user");
        setUsers(response.data); // Update state with fetched data
        console.log(response.data);
        setLoading(false); // Set loading to false
      } catch (err) {
        setError("Error fetching data"); // Handle errors
        setLoading(false);
      }
    };

    fetchUsers(); // Call the function
  }, []); // Empty dependency array ensures this runs only once

  // Example data
  const rows = users.map((user) => ({
    refno: user._id,
    nic: user.nic,
    user: user,
    interntype: user.ApplyAs || "N/A", // Fallback if interntype is not available
    name: user.fullName || "Unknown", // Use dynamic data or fallback value
    district: user.district || "N/A",
    institute: user.institute || "N/A",
    application_date: user.dateOfBirth
      ? new Date(user.dateOfBirth).toISOString().split("T")[0] // Extract only the date
      : "N/A", // Fallback if dateOfBirth is not available
  }));

  // Column definitions
  const columns = [
    { id: "nic", label: "NIC", numeric: false },
    { id: "refno", label: "Ref No", numeric: false },
    { id: "name", label: "Name", numeric: false },
    { id: "cvfrom", label: "CV From", numeric: true },
    { id: "interntype", label: "Intern Type", numeric: true },
    { id: "district", label: "District", numeric: true },
    { id: "application_date", label: "Application date", numeric: true },
    { id: "institute", label: "Institute", numeric: true },

    {
      id: "lifecycle",
      label: "Life cycle",
      numeric: false,
      renderCell: (row) => (
        <Button
          color="primary"
          variant="contained"
          onClick={() => alert(`Life cycle ${row.name}`)}
        >
          Life cycle
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
          onClick={() => alert(`View ${row.name}`)}
        >
          View CV
        </Button>
      ),
    },
    {
      id: "delete",
      label: "Delete",
      numeric: false,
      renderCell: (row) => (
        <Button
          color="primary"
          variant="contained"
          onClick={() => alert(`Delete ${row.name}`)}
        >
          View CV
        </Button>
      ),
    },
  ];

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

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  // Loading state
  if (loading) return <div>Loading...</div>;

  // Error state
  if (error) return <div>{error}</div>;

  return (
    <>
      <Box
        sx={{
          padding: 7,
          maxWidth: "1200px",
          margin: "20px auto",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <Typography
          sx={{
            textAlign: "left",
            color: "#4C585B",
            fontSize: 24,
            marginBottom: 4,
          }}
        >
          View All Approved CVs
        </Typography>
        <Grid2 container spacing={6}>
          {/* Dropdown */}
          <Grid2 item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Search By</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid2>

          {/* Text Field */}
          <Grid2 item xs={12} md={3}>
            <TextField
              id="standard-basic"
              label="Standard"
              variant="outlined"
              fullWidth // Ensures full width
            />
          </Grid2>
          <Grid2 item xs={12} md={3}>
            <Button
              variant="contained"
              sx={{ height: "100%", backgroundColor: "#615EFC" }}
              fullWidth
              color="success"
            >
              Add New CV
            </Button>
          </Grid2>
          <Grid2 item xs={12} md={3}>
            <Button
              variant="contained"
              sx={{ height: "100%", backgroundColor: "#615EFC" }}
              fullWidth
              color="success"
              onClick={() => setOpen(true)}
            >
              Shedule Interviews
            </Button>
          </Grid2>
          <Grid2 item xs={12} md={6}>
            <TextField
              id="standard-basic"
              label="Standard"
              variant="outlined"
              fullWidth // Ensures full width
            />
          </Grid2>
          <Grid2 item xs={12} md={3}>
            <Button
              variant="contained"
              sx={{ height: "100%", backgroundColor: "#091057" }}
              fullWidth
              color="success"
            >
              Search
            </Button>
          </Grid2>
          <Grid2 item xs={12} md={3}>
            <Button
              variant="contained"
              sx={{ height: "100%", backgroundColor: "#091057" }}
              fullWidth
              color="success"
            >
              Clear Filter
            </Button>
          </Grid2>
          <Grid2 item xs={12} md={4}>
            <Button
              variant="contained"
              sx={{ height: "100%", backgroundColor: "#091057" }}
              fullWidth
              color="success"
            >
              From Institutes
            </Button>
          </Grid2>
          <Grid2 item xs={12} md={4}>
            <Button
              variant="contained"
              sx={{ height: "100%", backgroundColor: "#091057" }}
              fullWidth
              color="success"
            >
              From Individuals
            </Button>
          </Grid2>
          <Grid2 item xs={12} md={4}>
            <Button
              variant="contained"
              sx={{ height: "100%", backgroundColor: "#091057" }}
              fullWidth
              color="success"
            >
              All Approved Cvs
            </Button>
          </Grid2>
          <Grid2 item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid2>
          <Grid2 item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid2>
          <Grid2 item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid2>
          <Grid2 item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid2>
        </Grid2>
        <ReusableTable rows={rows} columns={columns} />
        <ReusablePopup
          open={open}
          onClose={() => setOpen(false)}
          fields={fields}
          onSubmit={onSubmit}
        />
      </Box>
    </>
  );
};

export default ViewAllCv;
