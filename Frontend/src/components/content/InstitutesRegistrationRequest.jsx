import React from "react";
import ReusableTable from "../ReusableTable";
import { Button, Typography, Box } from "@mui/material";

const InstitutesRegistrationRequest = () => {
  const users = [
    {
      requestNo: 1,
      instName: "Institute of Technology",
      email: "john.doe@example.com",
      department: "Computer Science",
      instituteType: "University",
      contactWith: "John Doe",
      contactNo: "123-456-7890",
    },
    {
      requestNo: 2,
      instName: "Global Education Center",
      email: "jane.smith@example.com",
      department: "Business Administration",
      instituteType: "College",
      contactWith: "Jane Smith",
      contactNo: "987-654-3210",
    },
    {
      requestNo: 3,
      instName: "National Research Academy",
      email: "michael.brown@example.com",
      department: "Physics",
      instituteType: "Research Center",
      contactWith: "Michael Brown",
      contactNo: "555-555-5555",
    },
    {
      requestNo: 4,
      instName: "Tech Innovators Institute",
      email: "sarah.jones@example.com",
      department: "Engineering",
      instituteType: "Institute",
      contactWith: "Sarah Jones",
      contactNo: "111-222-3333",
    },
    {
      requestNo: 5,
      instName: "Future Skills Academy",
      email: "emma.wilson@example.com",
      department: "Education",
      instituteType: "Academy",
      contactWith: "Emma Wilson",
      contactNo: "444-333-2222",
    },
  ];

  const rows = users.map((user) => ({
    requestNo: user.requestNo,
    instName: user.instName,
    email: user.email,
    department: user.department,
    instituteType: user.instituteType,
    contactWith: user.contactWith,
    contactNo: user.contactNo,
  }));

  const columns = [
    { id: "requestNo", label: "requestNo", numeric: false },
    { id: "instName", label: "Inst Name", numeric: true },
    { id: "email", label: "Mobile number", numeric: true },
    { id: "department", label: "Department/Faculty", numeric: true },
    { id: "instituteType", label: "Institute Type", numeric: true },
    { id: "contactwith", label: "Contact With", numeric: true },
    { id: "contactno", label: "Contact No", numeric: true },

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
          Life cycle
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
          All Institute Registration Requests
        </Typography>
        <Button color="primary" variant="contained">
          Add New Institute
        </Button>
      </Box>
      <ReusableTable rows={rows} columns={columns} title="Nutrition Table" />
    </Box>
  );
};

export default InstitutesRegistrationRequest;
