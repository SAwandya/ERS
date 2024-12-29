import { Box, Typography, TextField, Button } from "@mui/material";
import Grid2 from "@mui/material/Grid";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ViewAllCv = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box
      sx={{
        padding: 7,
        maxWidth: "1200px",
        margin: "20px auto",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <Typography
        sx={{
          textAlign: "left",
          color: "#4C585B",
          fontSize: 24,
          marginBottom: 4,
        }}
      >
        View All Approved CVs
      </Typography>
      <Grid2 container spacing={6}>
        {/* Dropdown */}
        <Grid2 item xs={12} md={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid2>

        {/* Text Field */}
        <Grid2 item xs={12} md={3}>
          <TextField
            id="standard-basic"
            label="Standard"
            variant="outlined"
            fullWidth // Ensures full width
          />
        </Grid2>
        <Grid2 item xs={12} md={3}>
          <Button
            variant="contained"
            sx={{ height: "100%", backgroundColor: "#615EFC" }}
            fullWidth
            color="success"
          >
            Add New CV
          </Button>
        </Grid2>
        <Grid2 item xs={12} md={3}>
          <Button
            variant="contained"
            sx={{ height: "100%", backgroundColor: "#615EFC" }}
            fullWidth
            color="success"
          >
            Shedule Interviews
          </Button>
        </Grid2>
        <Grid2 item xs={12} md={6}>
          <TextField
            id="standard-basic"
            label="Standard"
            variant="outlined"
            fullWidth // Ensures full width
          />
        </Grid2>
        <Grid2 item xs={12} md={3}>
          <Button
            variant="contained"
            sx={{ height: "100%", backgroundColor: "#091057" }}
            fullWidth
            color="success"
          >
            Search
          </Button>
        </Grid2>
        <Grid2 item xs={12} md={3}>
          <Button
            variant="contained"
            sx={{ height: "100%", backgroundColor: "#091057" }}
            fullWidth
            color="success"
          >
            Clear Filter
          </Button>
        </Grid2>
        <Grid2 item xs={12} md={4}>
          <Button
            variant="contained"
            sx={{ height: "100%", backgroundColor: "#091057" }}
            fullWidth
            color="success"
          >
            From Institutes
          </Button>
        </Grid2>
        <Grid2 item xs={12} md={4}>
          <Button
            variant="contained"
            sx={{ height: "100%", backgroundColor: "#091057" }}
            fullWidth
            color="success"
          >
            From Individuals
          </Button>
        </Grid2>
        <Grid2 item xs={12} md={4}>
          <Button
            variant="contained"
            sx={{ height: "100%", backgroundColor: "#091057" }}
            fullWidth
            color="success"
          >
            All Approved Cvs
          </Button>
        </Grid2>
        <Grid2 item xs={12} md={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid2>
        <Grid2 item xs={12} md={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid2>
        <Grid2 item xs={12} md={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid2>
        <Grid2 item xs={12} md={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default ViewAllCv;
