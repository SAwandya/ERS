import React from "react";
import { useController } from "react-hook-form";
import { TextField, Select, MenuItem } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const InputField = ({
  name,
  label,
  type = "text",
  options = [],
  control,
  onChange,
}) => {
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
      onChange: (e) => {
        field.onChange(e); // Update react-hook-form state
        if (onChange) onChange(e); // Call custom onChange handler
      },
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
