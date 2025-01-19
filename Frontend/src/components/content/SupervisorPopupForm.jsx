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

const SupervisorPopupForm = ({ open, onClose, schemeId }) => {
  const [supervisors, setSupervisors] = useState([]); // Store fetched data
  const [selectedSupervisors, setSelectedSupervisors] = useState([]); // Track selected supervisors

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      managers: [
        {
          supervisor: "",
          allocation: "",
        },
      ],
    },
  });

  const [schemeSupervisors, setSchemeSupervisors] = useState([]);

  useEffect(() => {
    const fetchSupervisors = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/supervisor"
        );
        setSupervisors(response.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchSupervisors();
  }, []);

  useEffect(() => {
    const fetchSchemeSupervisors = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/scheme/${schemeId}/supervisors`
        );
        setSchemeSupervisors(response.data);

        // Set default values for the form based on fetched scheme supervisors
        const defaultManagers = response.data.map((item) => ({
          supervisor: item.supervisor._id,
          allocation: item.allocation,
        }));

        reset({ managers: defaultManagers }); // Reset form values
        setSelectedSupervisors(defaultManagers.map((item) => item.supervisor)); // Set selected supervisors
      } catch (err) {
        console.error("Error fetching scheme supervisors:", err);
      }
    };

    if (schemeId) fetchSchemeSupervisors();
  }, [schemeId, reset]);


  

  const { fields, append, remove } = useFieldArray({
    control,
    name: "managers",
  });

  const onSubmit = async (data) => {
    console.log("Form Data:", data.managers);

    console.log("Scheme ID:", schemeId);

    await axios
      .put(`http://localhost:3000/api/scheme/${schemeId}/supervisors`, {
        supervisors: data.managers,
      })
      .then((response) => {
        console.log("Response:", response.data);
        onClose();
      })
      .catch((err) => {
        console.error("An error occurred:", err.message);
      });
  };

  const handleSupervisorChange = (value, index) => {
    const updatedSelected = [...selectedSupervisors];
    updatedSelected[index] = value;
    setSelectedSupervisors(updatedSelected);
  };

  const getFilteredSupervisors = (index) => {
    return supervisors.filter(
      (supervisor) =>
        !selectedSupervisors.includes(supervisor._id) ||
        selectedSupervisors[index] === supervisor._id
    );
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
                      defaultValue=""
                      render={({ field }) => (
                        <Select
                          {...field}
                          label="Select Supervisor"
                          onChange={(event) => {
                            field.onChange(event.target.value);
                            handleSupervisorChange(event.target.value, index);
                          }}
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
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Allocation"
                        type="number"
                        sx={{ width: "200px" }}
                      />
                    )}
                  />

                  {index > 0 && (
                    <IconButton onClick={() => remove(index)}>
                      <CloseIcon />
                    </IconButton>
                  )}
                </Box>

                <Box sx={{ mt: 1 }}>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() =>
                      append({
                        supervisor: "",
                        allocation: "",
                      })
                    }
                    sx={{ mt: 1 }}
                  >
                    Add Another Manager at Level {index + 1}
                  </Button>
                </Box>
              </Box>
            ))}

            <Box sx={{ mt: 4, borderTop: "1px solid #ccc", pt: 2 }}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                size="large"
                fullWidth
              >
                Submit Manager Scheme
              </Button>
            </Box>
          </form>
        </Box>

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

export default SupervisorPopupForm;
