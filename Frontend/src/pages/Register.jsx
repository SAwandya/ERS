import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Paper,
  Grid,
} from "@mui/material";
import ReusableForm from "../components/ReusableForm";

const Register = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  const fields1 = [
    {
      name: "username",
      label: "Username",
      type: "text",
      rules: { required: "username is required" },
      gridSize: { md: 12 },
    },
    {
      name: "email",
      label: "EMAIL",
      type: "email",
      rules: {
        required: "Email is required",
        pattern: {
          value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          message: "Invalid email format",
        },
      },
      gridSize: { md: 12 },
    },
    {
      name: "fullName",
      label: "Full Name",
      type: "text",
      rules: { required: "Full Name is required" },
      gridSize: { md: 12 },
    },
    {
      name: "nameWithIntials",
      label: "NAME WITH INITIALS",
      type: "text",
      rules: { required: "Name with initials is required" },
      gridSize: { md: 12 },
    },
    {
      name: "postalAddress",
      label: "POSTAL ADDRESS",
      type: "text",
      rules: { required: "Postal address is required" },
      gridSize: { md: 12 },
    },
    {
      name: "nic",
      label: "NIC",
      type: "text",
      rules: {
        required: "NIC is required",
        pattern: {
          value: /^[0-9]{9}[vVxX]|[0-9]{12}$/,
          message: "NIC must be 9 digits followed by 'v/V' or 12 digits",
        },
      },
    },
    {
      name: "mobileNo",
      label: "MOBILE NUMBER",
      type: "number",
      rules: {
        required: "Mobile number is required",
        minLength: {
          value: 10,
          message: "Mobile number must be 10 digits",
        },
      },
    },
    {
      name: "district",
      label: "DISTRICT",
      type: "text",
      rules: { required: "District is required" },
    },
    {
      name: "dateOfBirth",
      label: "DATE OF BIRTH",
      type: "date",
      rules: { required: "Date of birth is required" },
    },
    {
      name: "trueAndCorrect",
      label: "True and Correct",
      type: "checkbox",
      options: [
        {
          value: true,
          label: "I confirm the above information is true and correct",
        },
      ],
      rules: { required: "You must agree to proceed" },
      gridSize: { md: 12 },
    },
  ];

  return (
    <Container maxWidth="lg">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Grid container spacing={4}>
          {/* Left side - Image */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="../src/assets/registerimage.jpg"
              alt="Account Creation Illustration"
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: "400px",
                objectFit: "contain",
              }}
            />
          </Grid>

          {/* Right side - Form */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                textAlign: "center",
                mb: 4,
                height: "80vh",
                overflowY: "scroll",
                scrollbarWidth: "none", // Hides scrollbar in Firefox
                "&::-webkit-scrollbar": {
                  display: "none", // Hides scrollbar in Chrome, Edge, Safari
                },
              }}
            >
              <ReusableForm fields={fields1} onSubmit={onSubmit} />
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Register;
