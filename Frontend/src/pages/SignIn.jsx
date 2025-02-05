import React from "react";
import { Box, Container, Typography, Paper, Grid } from "@mui/material";
import ReusableForm from "../components/ReusableForm";
import axios from "axios";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";

const SignIn = () => {
  const { login } = useAuth();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);

    await axios
      .post("http://localhost:3000/api/auth", data)
      .then((res) => {
        toast.success("Successfully logged in", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
        login(res.data);
        navigate("/");
        alert("Logged in successfully");
      })
      .catch((err) => {
        toast.error(err.response.data, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
        console.log(err);
      });
  };

  const fields1 = [
    {
      name: "username",
      label: "USERNAME / EMAIL",
      type: "text",
      rules: { required: "username is required" },
      gridSize: { md: 12 },
    },

    {
      name: "password",
      label: "PASSWORD",
      type: "password",
      rules: { required: "password is required" },
      gridSize: { md: 12 },
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
      <Container>
        <Paper elevation={3} sx={{ marginTop: "27px", borderRadius: "10px" }}>
          <Grid container spacing={4}>
            {/* Left side - Image */}
            <Grid
              sx={{ backgroundColor: "#D9EAFD", borderRadius: "10px" }}
              item
              xs={12}
              md={6}
            >
              <Box
                component="img"
                src="../src/assets/loginicon.png"
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
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  alignItems: "flex-start",
                  display: "flex",
                  height: "100%",
                  flexDirection: "column",
                  marginTop: "40px",
                }}
              >
                <Typography
                  sx={{ fontSize: "24px", fontWeight: 200, marginLeft: "14px" }}
                  align="center"
                  gutterBottom
                >
                  INTERNSHIP MANAGEMENT SYSTEM
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: 100,
                    color: "gray",
                    marginLeft: "14px",
                  }}
                  align="center"
                  gutterBottom
                >
                  Welcome back! Please sign in to your account
                </Typography>

                <Box
                  sx={{
                    textAlign: "start",
                    mb: 4,
                    height: "60vh",
                    marginTop: "20px",
                    overflowY: "scroll",
                    scrollbarWidth: "none", // Hides scrollbar in Firefox
                    "&::-webkit-scrollbar": {
                      display: "none", // Hides scrollbar in Chrome, Edge, Safari
                    },
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

export default SignIn;
