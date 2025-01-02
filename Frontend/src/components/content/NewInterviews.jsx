import React, { useState, useEffect } from "react";
import { Typography, TextField, Button, Box, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import API from "../../api";

const sriLankanDistricts = [
  "Ampara",
  "Anuradhapura",
  "Badulla",
  "Batticaloa",
  "Colombo",
  "Galle",
  "Gampaha",
  "Hambantota",
  "Jaffna",
  "Kalutara",
  "Kandy",
  "Kegalle",
  "Kilinochchi",
  "Kurunegala",
  "Mannar",
  "Matale",
  "Matara",
  "Monaragala",
  "Mullaitivu",
  "Nuwara Eliya",
  "Polonnaruwa",
  "Puttalam",
  "Ratnapura",
  "Trincomalee",
  "Vavuniya",
];

const InterviewForm = ({ selectedInterview, onSubmit }) => {
  const [formData, setFormData] = useState({
    label: "",
    date: "",
    location: "",
    edit: "",
    action: "",
    delete: "",
  });

  useEffect(() => {
    if (selectedInterview) setFormData(selectedInterview);
  }, [selectedInterview]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData._id) {
      await API.put(`/${formData._id}`, formData);
    } else {
      await API.post("/", formData);
    }
    onSubmit();
    setFormData({
      label: "",
      date: "",
      location: "",
      edit: "",
      action: "",
      delete: "",
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography
        sx={{
          textAlign: "left",
          color: "#4C585B",
          fontSize: 24,
          marginBottom: 4,
        }}
      >
        Add New Interview
      </Typography>
      <TextField
        label="Label"
        name="label"
        value={formData.label}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel id="location-label">Location</InputLabel>
        <Select
          labelId="location-label"
          name="location"
          value={formData.location}
          onChange={handleChange}
          fullWidth
        >
          {sriLankanDistricts.map((district) => (
            <MenuItem key={district} value={district}>
              {district}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="Edit"
        name="edit"
        value={formData.edit}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Action"
        name="action"
        value={formData.action}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Delete"
        name="delete"
        value={formData.delete}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        {formData._id ? "Update" : "Add"} Interview
      </Button>
    </Box>
  );
};

export default InterviewForm;
