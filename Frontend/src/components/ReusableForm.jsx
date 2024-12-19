// ReusableForm.jsx
import React from "react";
import { useForm } from "react-hook-form";
import InputField from "./InputField";
import { Button, Box, Grid } from "@mui/material";

const ReusableForm = ({ fields, onSubmit }) => {
  const { handleSubmit, control } = useForm();

  return (
    <Box sx={{ padding: 2, maxWidth: "800px", margin: "0 auto" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          {fields?.map((field) => (
            <Grid item xs={12} sm={6} key={field.name}>
              <InputField
                name={field.name}
                label={field.label}
                type={field.type}
                options={field.options}
                control={control}
              />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 2, textAlign: "right" }}>
          <Button variant="contained" type="submit" sx={{ minWidth: "120px" }}>
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ReusableForm;
