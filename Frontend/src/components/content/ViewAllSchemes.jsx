import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ReusableTable from "../ReusableTable";

const ViewAllSchemes = () => {

    const schemes = [
      {
        schemeName: "Education Upliftment Scheme",
        totalAllocation: "10,000,000",
        recurring: true,
      },
      {
        schemeName: "Health Care Improvement Program",
        totalAllocation: "25,000,000",
        recurring: false,
      },
      {
        schemeName: "Rural Development Initiative",
        totalAllocation: "15,000,000",
        recurring: true,
      },
      {
        schemeName: "Youth Skill Development",
        totalAllocation: "12,000,000",
        recurring: false,
      },
      {
        schemeName: "Environmental Conservation Scheme",
        totalAllocation: "20,000,000",
        recurring: true,
      },
    ];


  const rows = schemes.map((scheme) => ({
    schemeName: scheme.schemeName,
    totalAllocation: scheme.totalAllocation,
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

