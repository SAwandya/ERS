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
            } else if (field.type === "middelContentRight") {
              // Render a horizontal line for separation
              return (
                <Grid item xs={12} sm={6} key={`separator-${index}`}>
                  <Box>
                    {" "}
                    <Typography
                      sx={{
                        textAlign: "left",
                        color: "#2E5077",
                        fontSize: 16,
                        fontWeight: "bold",
                      }}
                    >
                      {field.label}
                    </Typography>
                  </Box>
                </Grid>
              );
            }else if(field.type === "fullcontent"){
              
              return (
                <Grid item xs={12} sm={6} key={`separator-${index}`}>
                  <Box>
                    {" "}
                    <Typography
                      sx={{
                        textAlign: "left",
                        color: "#2E5077",
                        fontSize: 16,
                        fontWeight: "bold",
                      }}
                    >
                      {field.label}
                    </Typography>
                  </Box>
                </Grid>
              );

            }else {
              // Render input fields
              return (
                <Grid item xs={12} sm={6} key={field.name}>
                  <InputField
                    name={field.name}
                    label={field.label}
                    type={field.type}
                    options={field.options}
                    control={control}
                    onChange={field.onChange}
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
