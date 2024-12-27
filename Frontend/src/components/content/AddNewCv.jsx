import React from "react";
import ReusableForm from "../ReusableForm";
import { Box, Typography } from "@mui/material";

const AddNewCv = () => {
  const includeExtraFields = false;

  const [applyas, setApplyas] = React.useState(null);

  const onSubmit = (data) => {
    console.log(data);
  };

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
    { name: "fullName", label: "FULL NAME", type: "text" },
    { name: "nameWithIntials", label: "NAME WITH INITIALS ", type: "text" },
    { name: "postalAddress", label: "POSTAL ADDRESS", type: "text" },
    { name: "district", label: "DISTRICT", type: "text" },
    { name: "dateOfBirth", label: "DATE OF BIRTH", type: "date" },
    { name: "nic", label: "NIC", type: "text" },
    { name: "mobileNo", label: "MOBILE NUMBER", type: "number" },
    { name: "LandPhoneNo", label: "LAND PHONE NUMBER", type: "number" },
    { name: "LandPhoneNo", label: "LAND PHONE NUMBER", type: "number" },
    { name: "email", label: "EMAIL", type: "email" },
    {
      name: "institute",
      label: "INSTITUTE",
      type: "select",
      options: [
        { value: "sliit", label: "SLIIT" },
        { value: "iit", label: "IIT" },
      ],
    },

    { type: "title", label: "Type Of Intership And Qualifications" },

    {
      name: "ApplyAs",
      label: "APPLY AS",
      type: "radio",
      options: [
        { value: "data entry operator", label: "DATA ENTRY OPERATOR" },
        { value: "intership", label: "INTERNSHIP" },
      ],
      onChange: (e) => console.log("Apply as:", e.target.value),
    },
    {
      type: "middelContentRight",
      label:
        "Internships for who are following higher educational programmes in recognized institutes which require an internship period as part of the programme",
    },
    // Add extra fields conditionally
    ...(includeExtraFields
      ? [
          { name: "extraField1", label: "EXTRA FIELD 1", type: "text" },
          { name: "extraField2", label: "EXTRA FIELD 2", type: "number" },
        ]
      : []), // Add nothing if condition is false
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
