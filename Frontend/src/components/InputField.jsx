// InputField.jsx
import React from "react";
import { useController } from "react-hook-form";
import { TextField, Select, MenuItem } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const InputField = ({ name, label, type = "text", options = [], control }) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  const renderInput = () => {
    const commonProps = {
      ...field,
      fullWidth: true,
      size: "medium",
      variant: "outlined",
      error: !!error,
      sx: { mb: 1 },
    };

    switch (type) {
      case "select":
        return (
          <Select {...commonProps} label={label}>
            {options?.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        );
      case "date":
        return <TextField {...commonProps} type="date" label={label} />;
      case "radio":
        return (
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              {...commonProps}
            >
              {options?.map((option) => (
                <FormControlLabel
                  value={option.value}
                  control={<Radio />}
                  label={option.label}
                />
              ))}
            </RadioGroup>
          </FormControl>
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
