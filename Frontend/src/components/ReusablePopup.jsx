import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  FormControl,
  Select,
  MenuItem,
  Button,
  Box,
  Typography,
} from "@mui/material";
import ReusableForm from "./ReusableForm";

const ReusablePopup = ({ open, onClose, fields, onSubmit, hedding }) => {
  const [selectedInterview, setSelectedInterview] = useState("");
  const [selectedScheme, setSelectedScheme] = useState("");

  const handleInterviewChange = (event) => {
    setSelectedInterview(event.target.value);
  };

  const handleSchemeChange = (event) => {
    setSelectedScheme(event.target.value);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        style: {
          borderRadius: "8px",
          padding: "20px",
        },
      }}
    >
      <DialogTitle>
        <Typography variant="h5" style={{ color: "#333" }}>
          {hedding || "Add hedding here"}
        </Typography>
      </DialogTitle>

      <DialogContent>
        <ReusableForm fields={fields} onSubmit={onSubmit} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 2,
            marginTop: 4,
          }}
        >
          <Button
            variant="contained"
            onClick={onClose}
            style={{
              backgroundColor: "#ff4081",
              color: "white",
            }}
          >
            Close
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ReusablePopup;
