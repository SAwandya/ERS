import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TextField,
  Checkbox,
  AppBar,
  Toolbar,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import PersonIcon from "@mui/icons-material/Person";

const AssignInterns = () => {
  const [interns] = useState([
    {
      id: "Wm7nBC32563",
      fullName: "Don Manuwelge Livindu Lasanjith Gunarathne",
      nic: "200256345922",
      address:
        "325A, Attidiya Main Road, Attidiya, Dehiwala, Colombo, Sri Lanka",
      mobile: "0763017627",
      cvFrom: "admin",
    },
  ]);

  return (
    <Box sx={{ bgcolor: "#f0f9ff", minHeight: "100vh" }}>
      <AppBar position="static" sx={{ bgcolor: "white", boxShadow: 1 }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton size="large" edge="start" sx={{ color: "#5B7CB1" }}>
            <HomeIcon />
          </IconButton>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography sx={{ color: "#666" }}>Welcome Admin</Typography>
            <IconButton>
              <FullscreenIcon />
            </IconButton>
            <IconButton>
              <PersonIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ p: 4, maxWidth: "1400px", margin: "0 auto" }}>
        <Typography variant="h5" sx={{ mb: 3, color: "#2c3e50" }}>
          Assign Interns for Induction
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
          <TextField
            placeholder="Type to filter column..."
            variant="outlined"
            size="small"
            sx={{
              width: 300,
              bgcolor: "white",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#e0e0e0",
                },
              },
            }}
          />

          <Button
            variant="contained"
            sx={{
              bgcolor: "#00BCD4",
              "&:hover": { bgcolor: "#00A5BB" },
              borderRadius: "4px",
              textTransform: "none",
              px: 3,
            }}
          >
            Assign to Induction
          </Button>
        </Box>

        <TableContainer component={Paper} sx={{ boxShadow: 1 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: "#f5f5f5" }}>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>Ref No</TableCell>
                <TableCell>Full Name</TableCell>
                <TableCell>NIC</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Mobile No</TableCell>
                <TableCell>CV From</TableCell>
                <TableCell>View CV</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {interns.map((intern) => (
                <TableRow key={intern.id}>
                  <TableCell padding="checkbox">
                    <Checkbox />
                  </TableCell>
                  <TableCell>{intern.id}</TableCell>
                  <TableCell>{intern.fullName}</TableCell>
                  <TableCell>{intern.nic}</TableCell>
                  <TableCell>{intern.address}</TableCell>
                  <TableCell>{intern.mobile}</TableCell>
                  <TableCell>{intern.cvFrom}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        bgcolor: "#5B7CB1",
                        "&:hover": { bgcolor: "#4A6A9E" },
                        textTransform: "none",
                      }}
                    >
                      View CV
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default AssignInterns;
