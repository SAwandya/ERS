import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import ReusableTable from "../ReusableTable";
import axios from "axios";

const ViewAllSchemes = () => {

  const [schemes, setScheme] = useState([]); // State to store fetched data
  const [loading, setLoading] = useState(true); // State to track loading
  const [error, setError] = useState(""); // State to handle errors

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Make a GET request to your API
        const response = await axios.get("http://localhost:3000/api/scheme");
        setScheme(response.data); // Update state with fetched data
        console.log(response.data);
        setLoading(false); // Set loading to false
      } catch (err) {
        setError("Error fetching data"); // Handle errors
        setLoading(false);
      }
    };

    fetchUsers(); // Call the function
  }, []); // Empty dependency array ensures this runs only once

  const rows = schemes.map((scheme) => ({
    schemeName: scheme.name,
    totalAllocation: scheme.allocation,
    recurring: scheme.recurring,
  }));

  const columns = [
    { id: "schemeName", label: "Scheme Name", numeric: false },
    { id: "totalAllocation", label: "Total Allocation", numeric: true },
    { id: "recurring", label: "Recurring", numeric: true },

    {
      id: "view",
      label: "View",
      numeric: false,
      renderCell: (row) => (
        <Button
          color="primary"
          variant="contained"
          onClick={() => alert(`View ${row.name}`)}
        >
          View scheme
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
          All Schemes
        </Typography>
        <Button color="primary" variant="contained">
          Add New Scheme
        </Button>
      </Box>
      <ReusableTable rows={rows} columns={columns} />
    </Box>
  );
};

export default ViewAllSchemes;

