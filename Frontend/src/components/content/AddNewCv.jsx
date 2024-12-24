import React from "react";
import ReusableForm from "../ReusableForm";
import { Box, Typography } from "@mui/material";

const AddNewCv = () => {
  const onSubmit = (data) => console.log(data);

  const fields1 = [
    { type: "title", label: "About User" },

    {
      name: "gender",
      label: "GENDER",
      type: "radio",
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
      ],
    },
    { name: "firstName", label: "First Name", type: "text" },
    { name: "lastName", label: "Last Name", type: "text" },
    { name: "email", label: "Email", type: "email" },
  ];

  // const fields2 = [
  //   {
  //     name: "gender",
  //     label: "Gender",
  //     type: "select",
  //     options: [
  //       { value: "male", label: "Male" },
  //       { value: "female", label: "Female" },
  //     ],
  //   },
  //   { name: "dob", label: "Date of Birth", type: "date" },
  // ];

  return (
    <Box
      sx={{
        padding: 7,
        maxWidth: "1000px",
        margin: "0 auto",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      {" "}
      <Typography
        sx={{
          textAlign: "left",
          color: "#4C585B",
          fontSize: 24,
          marginLeft: 7,
        }}
      >
        NEW CV
      </Typography>
      <Typography
        sx={{
          textAlign: "left",
          color: "#4C585B",
          fontSize: 17,
          marginBottom: 4,
          marginLeft: 7,
        }}
      >
        You can add new cv and later shedule an interview for them
      </Typography>
      <ReusableForm fields={fields1} onSubmit={onSubmit} />
    </Box>
  );
};

export default AddNewCv;
