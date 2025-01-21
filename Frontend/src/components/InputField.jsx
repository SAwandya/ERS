import React from "react";
import { useController } from "react-hook-form";
import {
  TextField,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Switch,
  Button,
  InputLabel,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Box, styled } from "@mui/system";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const InputField = ({
  name,
  label,
  type = "text",
  options = [],
  control,
  rules = {}, // Accept validation rules as props
  onChange,
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control, rules });

  const renderInput = () => {
    const commonProps = {
      ...field,
      fullWidth: true,
      size: "medium",
      variant: "outlined",
      error: !!error,
      sx: { mb: 1 },
      onChange: (e) => {
        if (type === "pdf") {
          let reader = new FileReader();
          reader.readAsDataURL(e.target.files[0]);
          reader.onload = () => {
            field.onChange(reader.result); // Update react-hook-form state
            if (onChange) onChange(reader.result); // Call custom onChange handler
          };
        } else {
          field.onChange(e); // Update react-hook-form state
          if (onChange) onChange(e); // Call custom onChange handler
        }
      },
    };

    switch (type) {
      case "select":
        return (
          <FormControl fullWidth>
            <InputLabel>{label}</InputLabel>
            <Select {...commonProps} label={label}>
              {options?.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );
      case "date":
        return (
          <TextField
            {...commonProps}
            type="date"
            label={label}
            InputLabelProps={{
              shrink: true, // Ensures the label is always above the input
            }}
          />
        );
      case "radio":
        return (
          <FormControl>
            <FormLabel>{label}</FormLabel>
            <RadioGroup
              {...commonProps}
              onChange={(e) => {
                field.onChange(e);
                if (onChange) onChange(e);
              }}
            >
              {options?.map((option) => (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  control={<Radio />}
                  label={option.label}
                />
              ))}
            </RadioGroup>
          </FormControl>
        );
      case "checkbox":
        return options?.map((option) => (
          <FormControlLabel
            key={option.value}
            control={
              <Checkbox
                checked={
                  Array.isArray(field.value) &&
                  field.value.includes(option.value)
                }
                onChange={(e) => {
                  const value = e.target.checked
                    ? [
                        ...(Array.isArray(field.value) ? field.value : []),
                        option.value,
                      ]
                    : field.value?.filter((v) => v !== option.value) || [];
                  field.onChange(value); // Update react-hook-form state
                  if (onChange) onChange(value); // Call custom onChange handler
                }}
              />
            }
            label={option.label}
          />
        ));
      case "switch":
        return (
          <FormControlLabel
            control={
              <Switch
                checked={!!field.value}
                color="warning"
                onChange={(e) => {
                  field.onChange(e.target.checked); // Update react-hook-form state
                  if (onChange) onChange(e.target.checked); // Call custom onChange handler
                }}
              />
            }
            label={label}
          />
        );
      case "pdf":
        return (
          <Box>
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
              sx={{
                backgroundColor: "#5C2FC2",
                color: "white",
                "&:hover": {
                  backgroundColor: "#4925A3",
                },
              }}
            >
              {label}
              <VisuallyHiddenInput
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => {
                      field.onChange(reader.result); // Store base64 PDF
                      if (onChange) onChange(reader.result);
                    };
                  }
                }}
                type="file"
                accept=".pdf"
              />
            </Button>
            {field.value && (
              <Box
                style={{
                  marginTop: "8px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  overflow: "hidden",
                  width: "100%",
                  maxWidth: "300px",
                  height: "400px",
                }}
              >
                <iframe
                  src={field.value}
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                  }}
                  title="PDF Preview"
                />
              </Box>
            )}
          </Box>
        );
      default:
        return <TextField {...commonProps} type={type} label={label} />;
    }
  };

  return (
    <>
      {renderInput()}
      {error && (
        <span style={{ color: "red", fontSize: "0.75rem" }}>
          {error.message}
        </span>
      )}
    </>
  );
};

export default InputField;
