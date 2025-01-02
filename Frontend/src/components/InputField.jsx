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
} from "@mui/material";

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
        field.onChange(e); // Update react-hook-form state
        if (onChange) onChange(e); // Call custom onChange handler
      },
    };

    switch (type) {
      case "select":
        return (
          <FormControl fullWidth>
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
