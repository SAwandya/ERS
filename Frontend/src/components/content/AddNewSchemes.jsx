import React from "react";
import ReusableForm from "../ReusableForm";
import { Box, Typography } from "@mui/material";
import axios from "axios";

const AddNewSchemes = () => {
  const onSubmit = async (data) => {
    await axios
      .post("http://localhost:3000/api/scheme", data)
      .then((res) => {
        console.log(res.data);
        alert("Scheme added successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("Error adding scheme");
      });
  };

  const fields = [
    {
      name: "name",
      label: "SCHEME NAME",
      type: "text",
      rules: { required: "Scheme name is required" },
      gridSize: { md: 12 },
    },
    {
      name: "allocation",
      label: "TOTAL ALLOCATION",
      type: "number",
      rules: { required: "Total allocation is required" },
      gridSize: { md: 12 },
    },
    {
      name: "onRequest",
      label: "ON REQUEST",
      type: "radio",
      options: [
        { value: true, label: "TRUE" },
        { value: false, label: "FALSE" },
      ],
      rules: { required: "On request is required" },
    },
    {
      name: "recurring",
      label: "RECURRING",
      type: "radio",
      options: [
        { value: true, label: "TRUE" },
        { value: false, label: "FALSE" },
      ],
      rules: { required: "recurring is required" },
    },
    {
      name: "rotational",
      label: "ROTATIONAL",
      type: "radio",
      options: [
        { value: true, label: "TRUE" },
        { value: false, label: "FALSE" },
      ],
      rules: { required: "Rotational is required" },
      gridSize: { md: 12 },
    },
    {
      name: "allowance",
      label: "PER HEAD ALLOWANCE",
      type: "number",
      rules: { required: "Per head allowance is required" },
      gridSize: { md: 6 },
    },
    {
      name: "currency",
      label: "CURRENCY",
      type: "select",
      options: [
        { value: "LKR", label: "LKR" },
        { value: "USD", label: "USD" },
      ],
      rules: { required: "currency is required" },
      gridSize: { md: 6 },
    },
    {
      name: "description",
      label: "DESCRIPTION",
      type: "text",
      rules: { required: "Description is required" },
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
        Add New Scheme
      </Typography>
      <ReusableForm fields={fields} onSubmit={onSubmit} />
    </Box>
  );
};

export default AddNewSchemes;
