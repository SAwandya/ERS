import React from "react";
import { useForm } from "react-hook-form";
import InputField from "./InputField";
import { Button, Box, Grid, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";

const ReusableForm = ({ fields, onSubmit, defaultValues = {} }) => {
  const { handleSubmit, control } = useForm({ defaultValues });

  const navigate = useNavigate();

  return (
    <Box sx={{ padding: 2, maxWidth: "800px", margin: "0 auto" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={6}>
          {fields?.map((field, index) => {
            if (field.type === "title") {
              return (
                <Grid item xs={12} key={`title-${index}`}>
                  <Typography
                    sx={{
                      textAlign: "left",
                      color: "#4C585B",
                      fontSize: 20,
                    }}
                  >
                    {field.label}
                  </Typography>
                  <Divider />
                </Grid>
              );
            } else if (
              field.type === "middelContentRight" ||
              field.type === "fullcontent"
            ) {
              // Render a specific content block
              return (
                <Grid
                  item
                  xs={field.gridSize?.xs || 12}
                  sm={field.gridSize?.sm || 6}
                  md={field.gridSize?.md || 6}
                  key={`content-${index}`}
                >
                  <Typography
                    sx={{
                      textAlign:
                        field.type === "middelContentRight" ? "right" : "left",
                      color: "#2E5077",
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    {field.label}
                  </Typography>
                </Grid>
              );
            } else {
              // Render input fields
              return (
                <Grid
                  item
                  xs={field.gridSize?.xs || 12}
                  sm={field.gridSize?.sm || 6}
                  md={field.gridSize?.md || 6}
                  key={field.name}
                >
                  <InputField
                    name={field.name}
                    label={field.label}
                    type={field.type}
                    options={field.options}
                    rules={field.rules} // Pass validation rules
                    control={control}
                    onChange={field.onChange}
                  />
                </Grid>
              );
            }
          })}
        </Grid>
        <Box sx={{ mt: 2, textAlign: "right", display: "flex", justifyContent: "end", gap: 2 }}>
          <Button variant="contained" color="warning" onClick={() => navigate(-1)} sx={{ minWidth: "120px" }}>
            Cancel
          </Button>
          <Button variant="contained" type="submit" color="success" sx={{ minWidth: "120px" }}>
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ReusableForm;
