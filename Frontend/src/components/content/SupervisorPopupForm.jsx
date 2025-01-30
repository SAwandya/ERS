import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  FormControl,
  Select,
  IconButton,
  MenuItem,
  TextField,
  Button,
  InputLabel,
  Box,
  Typography,
} from "@mui/material";
import { useFieldArray, useForm, Controller } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

const SupervisorPopupForm = ({ open, onClose, schemeId, allocation }) => {
  const [supervisors, setSupervisors] = useState([]); // Store all supervisors
  const { control, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      managers: [
        {
          supervisor: "",
          allocation: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "managers",
  });

  const selectedSupervisors = watch("managers").map(
    (manager) => manager.supervisor
  );

  // Watch all managers' allocation values
  const allocations = watch("managers").map(
    (manager) => Number(manager.allocation) || 0
  );

  // Calculate total allocation
  const totalAllocation = allocations.reduce((sum, value) => sum + value, 0);

  useEffect(() => {
    // Fetch available supervisors
    const fetchSupervisors = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/supervisor"
        );
        setSupervisors(response.data);
      } catch (err) {
        console.error("Error fetching supervisors:", err);
      }
    };

    fetchSupervisors();
  }, []);

  useEffect(() => {
    // Fetch assigned supervisors for the scheme
    const fetchSchemeSupervisors = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/scheme/${schemeId}/supervisors`
        );

        const defaultManagers = response.data.map((item) => ({
          supervisor: item.supervisor._id,
          allocation: item.allocation,
        }));

        reset({ managers: defaultManagers });
      } catch (err) {
        console.error("Error fetching scheme supervisors:", err);
      }
    };

    if (schemeId) {
      fetchSchemeSupervisors();
    }
  }, [schemeId, reset]);

  const getFilteredSupervisors = (index) => {
    return supervisors.filter(
      (supervisor) =>
        !selectedSupervisors.some(
          (selected, selectedIndex) =>
            selected === supervisor._id && selectedIndex !== index
        )
    );
  };

  const onSubmit = async (data) => {
    if (totalAllocation > allocation) {
      return; // Prevent submission if allocation exceeds limit
    }
    try {
      await axios.put(
        `http://localhost:3000/api/scheme/${schemeId}/supervisors`,
        {
          supervisors: data.managers,
        }
      );
      onClose(); // Close the dialog on successful submission
    } catch (err) {
      console.error("Error submitting data:", err);
    }
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
          Add Supervisor to Scheme
        </Typography>
      </DialogTitle>

      <DialogContent>
        <Box sx={{ p: 3 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {fields.map((field, index) => (
              <Box key={field.id} sx={{ mb: 2 }}>
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                  <FormControl fullWidth>
                    <InputLabel>Select Supervisor</InputLabel>
                    <Controller
                      name={`managers.${index}.supervisor`}
                      control={control}
                      render={({ field }) => (
                        <Select
                          {...field}
                          label="Select Supervisor"
                          onChange={(event) =>
                            field.onChange(event.target.value)
                          }
                        >
                          {getFilteredSupervisors(index).map((supervisor) => (
                            <MenuItem
                              key={supervisor._id}
                              value={supervisor._id}
                            >
                              {supervisor.supId} {supervisor.name}
                            </MenuItem>
                          ))}
                        </Select>
                      )}
                    />
                  </FormControl>

                  <Controller
                    name={`managers.${index}.allocation`}
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Allocation"
                        type="number"
                        sx={{ width: "200px" }}
                        inputProps={{ min: 0 }}
                      />
                    )}
                  />

                  {index > 0 && (
                    <IconButton onClick={() => remove(index)}>
                      <CloseIcon />
                    </IconButton>
                  )}
                </Box>
              </Box>
            ))}

            {/* Error Message for Exceeding Allocation */}
            {totalAllocation > allocation && (
              <Typography color="error" sx={{ mt: 2 }}>
                Total allocation ({totalAllocation}) exceeds the allowed limit (
                {allocation}).
              </Typography>
            )}

            <Box sx={{ mt: 2 }}>
              <Button
                variant="contained"
                onClick={() =>
                  append({
                    supervisor: "",
                    allocation: "",
                  })
                }
              >
                Add Another Manager
              </Button>
            </Box>

            <Box sx={{ mt: 4 }}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                disabled={totalAllocation > allocation} // Disable submit if exceeded
              >
                Submit
              </Button>
            </Box>
          </form>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mt: 2,
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

export default SupervisorPopupForm;
