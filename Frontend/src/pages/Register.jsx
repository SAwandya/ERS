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
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const onSubmit = async (data) => {
    const formData = {
      ...data,
      trueAndCorrect: data.trueAndCorrect[0],
    };

    const { confirmPassword, ...updatedData } = formData;

    const navigate = useNavigate();

    await axios
      .post("http://localhost:3000/api/user/register", updatedData)
      .then((res) => {
        alert("User created successfully");
        console.log(res);
        navigate("/signin");
      })
      .catch((err) => {
        console.log(err);
      });
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
      name: "nameWithInitials",
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
      name: "password",
      label: "PASSWORD",
      type: "password",
      rules: { required: "password is required" },
    },
    {
      name: "confirmPassword",
      label: "CONFIRM PASSWORD",
      type: "password",
      rules: { required: "confirm password is required" },
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
      gridSize: { md: 6 },
    },
  ];

  return (
    <Box
      sx={{
        backgroundImage: "url(../src/assets/registerbg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
        display: "flex", // Ensures centering works
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container>
        <Paper elevation={3} sx={{ marginTop: "27px", borderRadius: "10px" }}>
          <Grid container spacing={4}>
            {/* Left side - Image */}
            <Grid
              sx={{ backgroundColor: "#D9EAFD", borderRadius: "10px" }}
              item
              xs={12}
              md={5}
            >
              <Box
                component="img"
                src="../src/assets/registericon.png"
                alt="Account Creation Illustration"
                sx={{
                  width: "100%",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "auto",
                  maxHeight: "800px",
                  objectFit: "contain",
                  marginTop: "55px",
                }}
              />
            </Grid>

            {/* Right side - Form */}
            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  alignItems: "flex-start",
                  display: "flex",
                  height: "100%",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{ fontSize: "24px", fontWeight: 200 }}
                  align="center"
                  gutterBottom
                >
                  CREATE ACCOUNT IN IMS
                </Typography>
                <Typography
                  sx={{ fontSize: "20px", fontWeight: 100, color: "gray" }}
                  align="center"
                  gutterBottom
                >
                  Fill the below form to create an account
                </Typography>

                <Box
                  sx={{
                    textAlign: "start",
                    mb: 4,
                    height: "60vh",
                    overflowY: "scroll",
                    scrollbarWidth: "none", // Hides scrollbar in Firefox
                    "&::-webkit-scrollbar": {
                      display: "none", // Hides scrollbar in Chrome, Edge, Safari
                    },
                    marginRight: "30px",
                  }}
                >
                  <ReusableForm fields={fields1} onSubmit={onSubmit} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Register;
