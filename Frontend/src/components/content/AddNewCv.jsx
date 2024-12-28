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
    {
      name: "fullName",
      label: "FULL NAME",
      type: "text",
    },
    {
      name: "nameWithIntials",
      label: "NAME WITH INITIALS ",
      type: "text",
    },
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
        { value: "internship", label: "INTERNSHIP" },
      ],
      onChange: (e) => setApplyas(e.target.value),
    },
    {
      type: "middelContentRight",
      label:
        "Internships for who are following higher educational programmes in recognized institutes which require an internship period as part of the programme",
    },
    {
      type: "fullcontent",
      label:
        "O/L RESULT FOR MATHS, SCIENCE AND ENGLISH ARE COMPULSORY. PLEASE USE THIS FORMAT TO ENTER YOUR RESULTS - (SUBJECT: RESULT)",
      gridSize: { md: 12 },
    },
    // Add extra fields conditionally

    { name: "olsubject1", label: "subject 01", type: "text" },
    { name: "olsubject2", label: "subject 02", type: "text" },
    { name: "olsubject3", label: "subject 03", type: "text" },
    { name: "olsubject4", label: "subject 04", type: "text" },
    { name: "olsubject5", label: "subject 05", type: "text" },
    { name: "olsubject6", label: "subject 06", type: "text" },
    { name: "olsubject7", label: "subject 07", type: "text" },
    { name: "olsubject8", label: "subject 08", type: "text" },
    { name: "olsubject9", label: "subject 09", type: "text" },

    { type: "title", label: "" },

    {
      type: "fullcontent",
      label: "A/L RESULT",
      gridSize: { md: 12 },
    },

    { name: "alsubject1", label: "subject 01", type: "text" },
    { name: "alsubject2", label: "subject 02", type: "text" },
    { name: "alsubject3", label: "subject 03", type: "text" },
    { name: "alsubject4", label: "subject 04", type: "text" },
    {
      name: "generalInfo",
      label: "GCE A/L GENERAL INFORMATION ON TECHNOLOGY BY",
      type: "text",
      gridSize: { md: 12 },
    },

    { type: "title", label: "" },

    ...(applyas === "internship"
      ? [
          {
            name: "categoryOfApply",
            label: "CATEGORY OF APPLY",
            type: "select",
            options: [
              { value: "se intern", label: "SE INTERN" },
              {
                value: "data entry operator intern",
                label: "DATA ENTRY OPERATOR INTERN",
              },
              {
                value: "human resource intern",
                label: "HUMAN RESOURCE INTERN",
              },
            ],
          },
          {
            name: "HigherEducation",
            label: "HIGHER EDUCATION QULIFICATIONS",
            type: "text",
          },
        ]
      : [
          {
            name: "location",
            label: "PREFERRED LOCATION",
            type: "select",
            options: [
              { value: "head_office", label: "HEAD OFFICE" },
              { value: "matara_branch", label: "MATARA BRANCH" },
            ],
          },
        ]), // Add nothing if condition is false

    { name: "otherQualification", label: "OTHER QUALIFICATIONS", type: "text" },

    { type: "title", label: "In Case Of Emergency" },

    { name: "contactName1", label: "EMERGENCY CONTACT NAME 01", type: "text" },
    {
      name: "contactNumber1",
      label: "EMERGENCY CONTACT NUMBER 01",
      type: "number",
    },
    { name: "contactName2", label: "EMERGENCY CONTACT NAME 02", type: "text" },
    {
      name: "contactNumber1",
      label: "EMERGENCY CONTACT NUMBER 02",
      type: "number",
    },

    { type: "title", label: "Previous Training at SLT" },

    {
      name: "previouseTrainingSlt",
      label: "HAVE YOU UNDERGONE THROUGH PREVIOUS TRAINING AT SLT",
      type: "radio",
      options: [
        { value: true, label: "Yes" },
        { value: false, label: "No" },
      ],
    },

    { type: "title", label: "Upload Documents" },

    { name: "cvLink", label: "ATTACHED YOUR UPDATED CV", type: "file" },
    { name: "nicLink", label: "NIC(BOTH SIDES)", type: "file" },
    {
      name: "policeCertificateLink",
      label: "POLICE CLEARANCE REPORT(OPTIONAL)",
      type: "file",
    },
    {
      name: "InternshipRequestLetterLink",
      label: "INTERNSHIP REQUEST LETTER(INSTITUTES)",
      type: "file",
    },
    {
      name: "trueAndCorrect",
      label: "True and Correct",
      type: "checkbox",
      options: [{ value: true, label: "True and Correct" }],
    },
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
