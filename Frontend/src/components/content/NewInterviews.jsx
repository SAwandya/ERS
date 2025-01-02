import React, { useState, useEffect } from "react";
import {
  Typography,
  TextField,
  Button,
  Box,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
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

  const handleCancel = () => {
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
    <Box
      sx={{
        padding: 7,
        maxWidth: "1000px",
        margin: "0 auto",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
      component="form"
      onSubmit={handleSubmit}
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
        {formData._id ? "Edit Interview" : "Add New Interview"}
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
      <Box display="flex" justifyContent="space-between" mt={4}>
        <Button
          type="button"
          variant="contained"
          color="error"
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          {formData._id ? "Update" : "Add"} Interview
        </Button>
      </Box>
    </Box>
  );
};

export default InterviewForm;
