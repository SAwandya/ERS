import React from 'react'
import { Box, Typography, Paper, Button, Divider, Stack } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const LifeCycle = () => {
  return (
    <Paper sx={{ p: 4, maxWidth: 800, mx: "auto", mt: 4 }}>
      {/* CV Request Section */}
      <Box sx={{ mb: 4 }}>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
          <PersonOutlineIcon />
          <Typography variant="h6">Intern CV Request</Typography>
        </Stack>

        <Stack spacing={2}>
          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              Application reference number:
            </Typography>
            <Typography>GVHmKqH0527</Typography>
          </Box>

          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              Intern Full Name:
            </Typography>
            <Typography>Rishan Dushantha</Typography>
          </Box>

          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              Intern Name with initials:
            </Typography>
            <Typography>R Dushantha</Typography>
          </Box>

          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              Intern Status:
            </Typography>
            <Typography>Intern assigned waiting to report</Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}>
            <Button variant="contained" color="primary">
              View CV
            </Button>
            <Button variant="outlined" color="primary">
              Edit CV
            </Button>
          </Box>
        </Stack>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Placements Section */}
      <Box>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
          <PersonOutlineIcon />
          <Typography variant="h6">Intern Placements</Typography>
        </Stack>

        <Stack spacing={2}>
          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              Current placement:
            </Typography>
            <Typography>Computer Operator</Typography>
          </Box>

          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              Supervisor name:
            </Typography>
            <Typography>Shrivi Sandamini</Typography>
          </Box>

          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              Supervisor designation:
            </Typography>
            <Typography>Deputy General Manager</Typography>
          </Box>

          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              Supervisor organization:
            </Typography>
            <Typography>N/A</Typography>
          </Box>

          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              Supervisor service number:
            </Typography>
            <Typography>012300</Typography>
          </Box>

          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              Start Date:
            </Typography>
            <Typography>This intern has not been placed yet</Typography>
          </Box>

          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              End Date:
            </Typography>
            <Typography>This intern has not been placed yet</Typography>
          </Box>
        </Stack>
      </Box>
    </Paper>
  );
}

export default LifeCycle