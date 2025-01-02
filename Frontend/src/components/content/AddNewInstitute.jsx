import { Box, Typography } from "@mui/material";
import React from "react";
import ReusableForm from "../ReusableForm";

const AddNewInstitute = () => {
  const onSubmit = async (data) => {
    console.log(data);
  };

  const fields = [
    {
      name: "name",
      label: "INSTIUTE NAME",
      type: "text",
      rules: { required: "Institute name is required" },
      gridSize: { md: 12 },
    },
    {
      name: "type",
      label: "INSTIUTE TYPE",
      type: "text",
      rules: { required: "Institute type is required" },
      gridSize: { md: 12 },
    },
    {
      name: "cantactname",
      label: "CONTACT PERSON NAME",
      type: "text",
      rules: { required: "Contact person name is required" },
      gridSize: { md: 12 },
    },
    {
      name: "contactnumber",
      label: "CONTACT PERSON NUMBER",
      type: "text",
      rules: { required: "Contact peroson number is required" },
      gridSize: { md: 12 },
    },
    {
      name: "email",
      label: "INSTITUTE NAME",
      type: "text",
      rules: {
        required: "Instiute name is required",
        pattern: {
          value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          message: "Invalid email format",
        },
      },
      gridSize: { md: 12 },
    },
    {
      name: "address",
      label: "INSTITUTE ADDRESS",
      type: "text",
      rules: { required: "Instiute address is required" },
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
        Add New Institute
      </Typography>
      <ReusableForm fields={fields} onSubmit={onSubmit} />
    </Box>
  );
};

export default AddNewInstitute;
