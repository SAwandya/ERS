import React from "react";
import { useController } from "react-hook-form";
import { TextField, Select, MenuItem } from "@mui/material";

const InputField = ({ name, label, type = "text", options = [], control }) => {
  // Pass `control` to useController
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  const renderInput = () => {
    switch (type) {
      case "select":
        return (
          <Select {...field} label={label} error={!!error}>
            {options?.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        );
      case "date":
        return (
          <TextField {...field} type="date" label={label} error={!!error} />
        );
      default:
        return (
          <TextField {...field} type={type} label={label} error={!!error} />
        );
    }
  };

  return (
    <>
      {renderInput()}
      {error && <span style={{ color: "red" }}>{error.message}</span>}
    </>
  );
};

export default InputField;
