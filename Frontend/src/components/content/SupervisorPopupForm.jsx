import React, { useState } from "react";
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

const SupervisorPopupForm = ({ open, onClose }) => {
  const [selectedInterview, setSelectedInterview] = useState("");
  const [selectedScheme, setSelectedScheme] = useState("");

  const { control, handleSubmit } = useForm({
    defaultValues: {
      managers: [
        {
          supervisor: "",
          allocation: "",
          subManagers: [],
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "managers",
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

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
          Add Supervisor to Scheme
        </Typography>
      </DialogTitle>

      <DialogContent>
        <Box sx={{ p: 3, position: "relative" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {fields.map((field, index) => (
              <Box
                key={field.id}
                sx={{
                  mb: 2,
                  ml: index * 3,
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    left: "-20px",
                    top: "20px",
                    width: "20px",
                    height: "1px",
                    backgroundColor: "#ccc",
                    display: index > 0 ? "block" : "none",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: "-20px",
                    top: "0",
                    width: "1px",
                    height: "100%",
                    backgroundColor: "#ccc",
                    display: index > 0 ? "block" : "none",
                  },
                }}
              >
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                  <FormControl fullWidth>
                    <InputLabel>Select Supervisor</InputLabel>
                    <Controller
                      name={`managers.${index}.supervisor`}
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <Select {...field} label="Select Supervisor">
                          <MenuItem value="010067">
                            010067 Janaka Harambearachchi
                          </MenuItem>
                          <MenuItem value="011338">
                            011338 Kosala Tennakoon
                          </MenuItem>
                          <MenuItem value="012459">
                            012459 Sandun Amarasinghe
                          </MenuItem>
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
                        subManagers: [],
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
