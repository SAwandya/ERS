import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const InductionSchedule = () => {
  const [schedules, setSchedules] = useState([
    {
      id: 1,
      name: "Induction 1",
      startTime: "2024-12-10 08:18 PM",
      endTime: "2024-12-10 08:18 PM",
      location: "Head Office",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (id) => {
    setSchedules(schedules.filter((schedule) => schedule.id !== id));
  };

  const filteredSchedules = schedules.filter((schedule) =>
    schedule.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ p: 3, maxWidth: "1200px", margin: "0 auto" }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        All Induction Schedules
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <TextField
          placeholder="Type to filter..."
          variant="outlined"
          size="small"
          sx={{ flexGrow: 1 }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <Button
          variant="contained"
          startIcon={<AddCircleOutlineIcon />}
          sx={{
            bgcolor: "#5B7CB1",
            "&:hover": { bgcolor: "#4A6A9E" },
          }}
        >
          Create New Induction
        </Button>

        <Button
          variant="contained"
          startIcon={<PersonAddIcon />}
          sx={{
            bgcolor: "#5B7CB1",
            "&:hover": { bgcolor: "#4A6A9E" },
          }}
        >
          Assign Interns to Inductions
        </Button>
      </Box>

      <TableContainer component={Paper} sx={{ boxShadow: 1 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "#f5f5f5" }}>
              <TableCell>Induction</TableCell>
              <TableCell>Start time</TableCell>
              <TableCell>End time</TableCell>
              <TableCell>Location</TableCell>
              <TableCell align="center">View</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredSchedules.map((schedule) => (
              <TableRow key={schedule.id}>
                <TableCell>{schedule.name}</TableCell>
                <TableCell>{schedule.startTime}</TableCell>
                <TableCell>{schedule.endTime}</TableCell>
                <TableCell>{schedule.location}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    size="small"
                    startIcon={<EditIcon />}
                    sx={{
                      bgcolor: "#00BCD4",
                      "&:hover": { bgcolor: "#00A5BB" },
                    }}
                  >
                    View/Edit
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    size="small"
                    startIcon={<DeleteIcon />}
                    onClick={() => handleDelete(schedule.id)}
                    sx={{
                      bgcolor: "#FF5252",
                      "&:hover": { bgcolor: "#FF3939" },
                    }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ bgcolor: "#424242", color: "white", mt: 2, p: 1 }}>
        <Typography variant="body2">1 total</Typography>
      </Box>
    </Box>
  );
};

export default InductionSchedule;
