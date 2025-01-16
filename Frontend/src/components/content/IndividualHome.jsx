import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import GridViewIcon from "@mui/icons-material/GridView";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import EditIcon from "@mui/icons-material/Edit";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const StyledPaper = styled(Paper)(({ theme, color }) => ({
  padding: theme.spacing(3),
  color: "white",
  backgroundColor: color,
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  cursor: "pointer",
  minHeight: 150,
  "&:hover": {
    opacity: 0.9,
  },
}));

const IndividualHome = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography sx={{ mb: 1, fontSize: "30px" }}>
          Welcome to SLT Internship Management System
        </Typography>
        <Typography
          sx={{ fontSize: "20px" }}
          variant="subtitle2"
          color="text.secondary"
        >
          Check your intern status
        </Typography>

        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6} md={4}>
            <StyledPaper color="#4CAF50">
              <PersonIcon sx={{ fontSize: "50px" }} />
              <Box>
                <Typography sx={{ fontSize: "26px" }} variant="subtitle1">
                  Request Internship
                </Typography>
              </Box>
            </StyledPaper>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <StyledPaper color="#2196F3">
              <ChatIcon sx={{ fontSize: "50px" }} />
              <Box>
                <Typography sx={{ fontSize: "26px" }} variant="subtitle1">
                  Reporting Internship Placement
                </Typography>
              </Box>
            </StyledPaper>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <StyledPaper color="#009688">
              <GridViewIcon sx={{ fontSize: "50px" }} />
              <Box>
                <Typography sx={{ fontSize: "26px" }} variant="subtitle1">
                  Request certificates
                </Typography>
              </Box>
            </StyledPaper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default IndividualHome;
