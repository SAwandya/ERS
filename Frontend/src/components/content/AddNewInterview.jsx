import { Box, Typography } from "@mui/material";
import React from "react";
import ReusableForm from "../ReusableForm";
import axios from "axios";

const AddNewInterview = () => {
  const onSubmit = async (data) => {
    await axios
      .post("http://localhost:3000/api/interview", data)
      .then((res) => {
        console.log(res.data);
        alert("Interview added successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("Error adding interview");
      });
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
      name: "date",
      label: "INTERVIEW DATE",
      type: "date",
      rules: { required: "Interview date is required" },
      gridSize: { md: 12 },
    },
    {
      name: "time",
      label: "INTERVIEW TIME",
      type: "time",
      rules: { required: "Interview time is required" },
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
};

export default AddNewInterview;
