import React, { useState } from "react";
import {
  Container,
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
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
} from "@mui/material";

const ViewAllSchemes = () => {
  const [schemes, setSchemes] = useState([
    { id: 1, name: "IT Intern Scheme", allocation: 25, recurring: "Yes" },
    { id: 2, name: "DEO", allocation: 100, recurring: "Yes" },
    { id: 3, name: "Vocational", allocation: 450, recurring: "Yes" },
    { id: 4, name: "Vocational 1", allocation: 450, recurring: "Yes" },
    { id: 5, name: "Computer Operator", allocation: 500, recurring: "Yes" },
  ]);

  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [newScheme, setNewScheme] = useState({
    name: "",
    allocation: "",
    recurring: "Yes",
  });

  const handleDelete = (id) => {
    setSchemes(schemes.filter((scheme) => scheme.id !== id));
  };

  const handleAddScheme = () => {
    if (newScheme.name && newScheme.allocation) {
      setSchemes([
        ...schemes,
        {
          id: schemes.length + 1,
          ...newScheme,
        },
      ]);
      setNewScheme({ name: "", allocation: "", recurring: "Yes" });
      setOpen(false); // Close dialog after adding scheme
    }
  };

  return (
    <Container>
      <Typography variant="h4" align="center" sx={{ margin: "20px 0" }}>
        All Schemes
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextField
          label="Type scheme name to filter"
          variant="outlined"
          style={{ flex: 1, marginRight: "10px" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          variant="contained"
          sx={{ backgroundColor: "#8C8C8C", color: "#fff" }}
          onClick={() => setOpen(true)}
        >
          Add New Scheme
        </Button>
      </div>
      <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Scheme Name</TableCell>
              <TableCell>Total Allocation</TableCell>
              <TableCell>Recurring</TableCell>
              <TableCell>View</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {schemes
              .filter((scheme) =>
                scheme.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((scheme) => (
                <TableRow key={scheme.id}>
                  <TableCell>{scheme.name}</TableCell>
                  <TableCell>{scheme.allocation}</TableCell>
                  <TableCell>{scheme.recurring}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => alert(`Viewing ${scheme.name}`)}
                    >
                      View Scheme
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDelete(scheme.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          backgroundColor: "black",
          color: "white",
          padding: "10px",
          marginTop: "10px",
          textAlign: "center",
          fontSize: "18px",
        }}
      >
        {schemes.length} Total
      </Box>

      {/* Dialog for Adding New Scheme */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add New Scheme</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the details for the new scheme.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Scheme Name"
            type="text"
            fullWidth
            variant="outlined"
            value={newScheme.name}
            onChange={(e) =>
              setNewScheme({ ...newScheme, name: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Total Allocation"
            type="number"
            fullWidth
            variant="outlined"
            value={newScheme.allocation}
            onChange={(e) =>
              setNewScheme({ ...newScheme, allocation: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleAddScheme} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ViewAllSchemes;
