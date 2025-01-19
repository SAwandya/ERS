import React from 'react'
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
import { useNavigate } from 'react-router-dom';

const StyledPaper = styled(Paper)(({ theme, color }) => ({
  padding: theme.spacing(3),
  color: "white",
  backgroundColor: color,
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  cursor: "pointer",
  minHeight: 100,
  "&:hover": {
    opacity: 0.9,
  },
}));

const Home = () => {

  const navigate = useNavigate();

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" sx={{ mb: 1 }}>
          Manage Interns and Placements
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          Full cycle for interns
        </Typography>

        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6} md={3}>
            <StyledPaper
              onClick={() => navigate("/approvedcv")}
              color="#4CAF50"
            >
              <PersonIcon />
              <Box>
                <Typography variant="subtitle1">Manage</Typography>
                <Typography variant="caption">All DVs</Typography>
              </Box>
            </StyledPaper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <StyledPaper
              onClick={() => navigate("/allinterviews")}
              color="#2196F3"
            >
              <ChatIcon />
              <Box>
                <Typography variant="subtitle1">Interviews</Typography>
                <Typography variant="caption">Select Interns</Typography>
              </Box>
            </StyledPaper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <StyledPaper color="#009688">
              <GridViewIcon />
              <Box>
                <Typography variant="subtitle1">Inductions</Typography>
                <Typography variant="caption">Schedule</Typography>
              </Box>
            </StyledPaper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <StyledPaper onClick={() => navigate("/lifecycle")} color="#37474F">
              <SearchIcon />
              <Box>
                <Typography variant="subtitle1">Find Profile</Typography>
                <Typography variant="caption">Intern life cycle</Typography>
              </Box>
            </StyledPaper>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Typography variant="h5" sx={{ mb: 1 }}>
          Schemes, Managers and Requests
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          Full cycle for Schemes and Requests
        </Typography>

        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6} md={3}>
            <StyledPaper
              onClick={() => navigate("/viewallschemes")}
              color="#03A9F4"
            >
              <DescriptionIcon />
              <Box>
                <Typography variant="subtitle1">Schemes</Typography>
                <Typography variant="caption">All Schemes</Typography>
              </Box>
            </StyledPaper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <StyledPaper onClick={() => navigate("/requests")} color="#0288D1">
              <EditIcon />
              <Box>
                <Typography variant="subtitle1">Requests</Typography>
                <Typography variant="caption">
                  Manage Intern Requests
                </Typography>
              </Box>
            </StyledPaper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <StyledPaper
              onClick={() => navigate("/instituterequest")}
              color="#01579B"
            >
              <HomeIcon />
              <Box>
                <Typography variant="subtitle1">Institutes</Typography>
                <Typography variant="caption">Manage Institutes</Typography>
              </Box>
            </StyledPaper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <StyledPaper color="#0D47A1">
              <LocationOnIcon />
              <Box>
                <Typography variant="subtitle1">Rotations</Typography>
                <Typography variant="caption">Intern Rotation</Typography>
              </Box>
            </StyledPaper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Home