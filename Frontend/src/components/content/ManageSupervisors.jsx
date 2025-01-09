import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReusableTable from "../ReusableTable";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReusablePopup from "../ReusablePopup";

const ManageSupervisors = () => {
  const [supervisors, setSupervisor] = useState([]); // State to store fetched data
  const [loading, setLoading] = useState(true); // State to track loading
  const [error, setError] = useState(""); // State to handle errors

  const [open, setOpen] = useState(false);

  const fields = [
    { name: "supId", label: "SUPERVISOR ID", type: "text" },
    { name: "name", label: "NAME", type: "text" },
    { name: "email", label: "EMAIL", type: "text" },
  ];

  const onSubmit = async (data) => {
    await axios
      .post("http://localhost:3000/api/supervisor", data)
      .then(() => {
        setOpen(false);
        alert("Supervisor added successfully");
      })
      .catch(() => {
        alert("Error adding supervisor");
      });
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Make a GET request to your API
        const response = await axios.get(
          "http://localhost:3000/api/supervisor"
        );
        setSupervisor(response.data); // Update state with fetched data
        setLoading(false); // Set loading to false
      } catch (err) {
        setError("Error fetching data"); // Handle errors
        setLoading(false);
      }
    };

    fetchUsers(); // Call the function
  }, []); // Empty dependency array ensures this runs only once

  const rows = supervisors.map((supervisor) => ({
    id: supervisor._id,
    supId: supervisor.supId,
    name: supervisor.name,
    email: supervisor.email,
  }));

  const columns = [
    { id: "supId", label: "SUPERVISOR ID", numeric: false },
    { id: "name", label: "NAME", numeric: true },
    { id: "email", label: "EMAIL", numeric: true },

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
          All Supervisors
        </Typography>
        <Button
          onClick={() => setOpen(true)}
          color="primary"
          variant="contained"
        >
          Add new Supervisor
        </Button>
      </Box>
      <ReusableTable rows={rows} columns={columns} />
      <ReusablePopup
        open={open}
        onClose={() => setOpen(false)}
        fields={fields}
        onSubmit={onSubmit}
        hedding={"Add New Supervisor"}
      />
    </Box>
  );
};

export default ManageSupervisors;
