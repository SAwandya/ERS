import React from "react";
import { useForm } from "react-hook-form";
import InputField from "./InputField";
import { Button, Box, Grid, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

const ReusableForm = ({ fields, onSubmit }) => {
  const { handleSubmit, control } = useForm();

  return (
    <Box sx={{ padding: 2, maxWidth: "800px", margin: "0 auto" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={6}>
          {fields?.map((field, index) => {
            if (field.type === "title") {
              <Typography
                sx={{
                  textAlign: "left",
                  color: "#4C585B",
                  fontSize: 24,
                }}
              >
                {field.label}
              </Typography>;
              <Divider />;

              return (
                <Grid item xs={12} key={`title-${index}`}>
                  <Typography
                    variant="h6"
                    sx={{ marginTop: 2, marginBottom: 1, fontWeight: "bold" }}
                  >
                    {field.label}
                  </Typography>
                </Grid>
              );
            } else if (field.type === "separator") {
              // Render a horizontal line for separation
              return (
                <Grid item xs={12} key={`separator-${index}`}>
                  <Box
                    sx={{
                      borderTop: "1px solid #ccc",
                      margin: "16px 0",
                    }}
                  />
                </Grid>
              );
            } else {
              // Render input fields
              return (
                <Grid item xs={12} sm={6} key={field.name}>
                  <InputField
                    name={field.name}
                    label={field.label}
                    type={field.type}
                    options={field.options}
                    control={control}
                  />
                </Grid>
              );
            }
          })}
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
