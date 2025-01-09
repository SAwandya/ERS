import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  IconButton,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate, useParams } from "react-router-dom";
import SupervisorPopupForm from "./SupervisorPopupForm";

const AllSupervisors = () => {
  const [schemeName, setSchemeName] = useState("IT Intern Schem");
  const [totalAllocation, setTotalAllocation] = useState("25");

  const [open, setOpen] = useState(false);

  const { id } = useParams();

  return (
    <Box sx={{ p: 3, backgroundColor: "#f5f9fc" }}>
      <Typography variant="h5" sx={{ mb: 3, color: "#2c3e50" }}>
        Schemes Managers
      </Typography>

      <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
        <TextField
          label="Scheme Name"
          value={schemeName}
          onChange={(e) => setSchemeName(e.target.value)}
          size="small"
          sx={{ backgroundColor: "white" }}
        />
        <TextField
          label="Total Allocation"
          value={totalAllocation}
          onChange={(e) => setTotalAllocation(e.target.value)}
          size="small"
          sx={{ backgroundColor: "white" }}
        />
      </Stack>

      <Box sx={{ mb: 2 }}>
        <TextField
          placeholder="Type to filter column..."
          size="small"
          fullWidth
          sx={{ maxWidth: 300, backgroundColor: "white" }}
        />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#5c7cfa",
            "&:hover": { backgroundColor: "#4263eb" },
          }}
          onClick={() => setOpen(true)}
        >
          Assign/ Update New Manager
        </Button>
      </Box>

      {/* Manager Items */}
      <Stack spacing={2}>
        {[
          { name: "Shrivi Sandamini", id: "012300", self: 4, hierarchy: 4 },
          { name: "Kapila Kulasena", id: "008316", self: 5, hierarchy: 8 },
        ].map((manager) => (
          <Paper
            key={manager.id}
            sx={{
              p: 2,
              backgroundColor: "#f8f9fa",
              "&:hover": { backgroundColor: "#f1f3f5" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography>
                Name: {manager.name} ({manager.id}) Self: {manager.self}{" "}
                Hierarchy: {manager.hierarchy}
              </Typography>
              <Stack direction="row" spacing={1}>
                <Button
                  startIcon={<VisibilityIcon />}
                  variant="contained"
                  size="small"
                  sx={{ backgroundColor: "#74c0fc" }}
                >
                  View Interns
                </Button>
                <Button
                  startIcon={<DeleteIcon />}
                  variant="contained"
                  size="small"
                  color="error"
                >
                  Delete
                </Button>
                <IconButton size="small" sx={{ backgroundColor: "#e9ecef" }}>
                  <EditIcon />
                </IconButton>
              </Stack>
            </Box>
          </Paper>
        ))}
      </Stack>
      <SupervisorPopupForm schemeId={id} open={open} onClose={() => setOpen(false)} />
    </Box>
  );
};

export default AllSupervisors;
