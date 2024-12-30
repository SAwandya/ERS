import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReusableTable from "../ReusableTable";
import axios from "axios";
import Swal from "sweetalert2";
import ReusableForm from "../ReusableForm";

const ApprovedCv = () => {
  const [users, setUsers] = useState([]); // State to store fetched data
  const [loading, setLoading] = useState(true); // State to track loading
  const [error, setError] = useState(""); // State to handle errors

  const [applyas, setApplyas] = React.useState(null);

  const formFields = [
    { type: "title", label: "About User" },

    {
      name: "gender",
      label: "GENDER",
      type: "radio",
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
      ],
      rules: { required: "Gender is required" },
    },
    {
      name: "fullName",
      label: "FULL NAME",
      type: "text",
      rules: { required: "Full Name is required" },
    },
    {
      name: "nameWithInitials",
      label: "NAME WITH INITIALS",
      type: "text",
      rules: { required: "Name with initials is required" },
    },
    {
      name: "postalAddress",
      label: "POSTAL ADDRESS",
      type: "text",
      rules: { required: "Postal address is required" },
    },
    {
      name: "district",
      label: "DISTRICT",
      type: "text",
      rules: { required: "District is required" },
    },
    {
      name: "dateOfBirth",
      label: "DATE OF BIRTH",
      type: "date",
      rules: { required: "Date of birth is required" },
    },
    {
      name: "nic",
      label: "NIC",
      type: "text",
      rules: {
        required: "NIC is required",
        pattern: {
          value: /^[0-9]{9}[vVxX]|[0-9]{12}$/,
          message: "NIC must be 9 digits followed by 'v/V' or 12 digits",
        },
      },
    },
    {
      name: "mobileNo",
      label: "MOBILE NUMBER",
      type: "number",
      rules: {
        required: "Mobile number is required",
        minLength: {
          value: 10,
          message: "Mobile number must be 10 digits",
        },
      },
    },
    {
      name: "LandPhoneNo",
      label: "LAND PHONE NUMBER",
      type: "number",
    },
    {
      name: "email",
      label: "EMAIL",
      type: "email",
      rules: {
        required: "Email is required",
        pattern: {
          value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          message: "Invalid email format",
        },
      },
    },
    {
      name: "institute",
      label: "INSTITUTE",
      type: "select",
      options: [
        { value: "sliit", label: "SLIIT" },
        { value: "iit", label: "IIT" },
      ],
      rules: { required: "Institute is required" },
    },

    { type: "title", label: "Type Of Internship And Qualifications" },

    {
      name: "ApplyAs",
      label: "APPLY AS",
      type: "radio",
      options: [
        { value: "data entry operator", label: "DATA ENTRY OPERATOR" },
        { value: "internship", label: "INTERNSHIP" },
      ],
      onChange: (e) => setApplyas(e.target.value),
      rules: { required: "Please select an application type" },
    },
    {
      type: "fullcontent",
      label:
        "O/L RESULT FOR MATHS, SCIENCE AND ENGLISH ARE COMPULSORY. PLEASE USE THIS FORMAT TO ENTER YOUR RESULTS - (SUBJECT: RESULT)",
      gridSize: { md: 12 },
    },
    { name: "olsubject1", label: "Subject 01", type: "text" },
    { name: "olsubject2", label: "Subject 02", type: "text" },
    { name: "olsubject3", label: "Subject 03", type: "text" },
    { name: "olsubject4", label: "Subject 04", type: "text" },
    { name: "olsubject5", label: "Subject 05", type: "text" },
    { name: "olsubject6", label: "Subject 06", type: "text" },
    { name: "olsubject7", label: "Subject 07", type: "text" },
    { name: "olsubject8", label: "Subject 08", type: "text" },
    { name: "olsubject9", label: "Subject 09", type: "text" },

    { type: "title", label: "" },

    {
      type: "fullcontent",
      label: "A/L RESULT",
      gridSize: { md: 12 },
    },

    { name: "alsubject1", label: "Subject 01", type: "text" },
    { name: "alsubject2", label: "Subject 02", type: "text" },
    { name: "alsubject3", label: "Subject 03", type: "text" },
    { name: "alsubject4", label: "Subject 04", type: "text" },
    {
      name: "generalInfo",
      label: "GCE A/L GENERAL INFORMATION ON TECHNOLOGY BY",
      type: "text",
      gridSize: { md: 12 },
    },

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
            rules: { required: "Please select a category" },
          },
          {
            name: "HigherEducation",
            label: "HIGHER EDUCATION QUALIFICATIONS",
            type: "text",
            rules: { required: "Higher education details are required" },
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
            rules: { required: "Preferred location is required" },
          },
        ]),

    { name: "otherQualification", label: "OTHER QUALIFICATIONS", type: "text" },

    { type: "title", label: "In Case Of Emergency" },

    { name: "contactName1", label: "EMERGENCY CONTACT NAME 01", type: "text" },
    {
      name: "contactNumber1",
      label: "EMERGENCY CONTACT NUMBER 01",
      type: "number",
      rules: { required: "Emergency contact number is required" },
    },
    { name: "contactName2", label: "EMERGENCY CONTACT NAME 02", type: "text" },
    {
      name: "contactNumber2",
      label: "EMERGENCY CONTACT NUMBER 02",
      type: "number",
    },

    { type: "title", label: "Previous Training at SLT" },

    {
      name: "previouseTrainingSlt",
      label: "HAVE YOU UNDERGONE PREVIOUS TRAINING AT SLT",
      type: "radio",
      options: [
        { value: true, label: "Yes" },
        { value: false, label: "No" },
      ],
      rules: { required: "This field is required" },
    },

    { type: "title", label: "Upload Documents" },

    { name: "cvLink", label: "ATTACH YOUR UPDATED CV", type: "file" },
    { name: "nicLink", label: "NIC (BOTH SIDES)", type: "file" },
    {
      name: "policeCertificateLink",
      label: "POLICE CLEARANCE REPORT (OPTIONAL)",
      type: "file",
    },
    {
      name: "InternshipRequestLetterLink",
      label: "INTERNSHIP REQUEST LETTER (INSTITUTE)",
      type: "file",
    },
    {
      name: "trueAndCorrect",
      label: "True and Correct",
      type: "checkbox",
      options: [
        {
          value: true,
          label: "I confirm the above information is true and correct",
        },
      ],
      rules: { required: "You must agree to proceed" },
    },
  ];

  const [selectedUser, setSelectedUser] = useState(null);

  const onSubmit = async (data) => {};

  const handleEdit = (user) => {
    console.log(user);
    setSelectedUser(user);
  };

  const handleApprove = async (id, label) => {
    let approve;
    if (label === "decline") {
      approve = false;
    } else {
      approve = true;
    }

    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Do you wanna approve!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const response = await axios.put(
            `http://localhost:3000/api/user/${id}`,
            {
              cvApprovel: approve,
            }
          );
          console.log(response.data);
          Swal.fire({
            title: "Approved!",
            text: "Cv has been approved.",
            icon: "success",
          });
        }
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Make a GET request to your API
        const response = await axios.get("http://localhost:3000/api/user");
        setUsers(response.data); // Update state with fetched data
        setLoading(false); // Set loading to false
      } catch (err) {
        setError("Error fetching data"); // Handle errors
        setLoading(false);
      }
    };

    fetchUsers(); // Call the function
  }, []); // Empty dependency array ensures this runs only once

  // Example data
  const rows = users.map((user) => ({
    id: user._id,
    nic: user.nic,
    user: user,
    name: user.fullName || "Unknown", // Use dynamic data or fallback value
    mobile: user.mobileNo || "N/A",
    cv: user.cvLink || "No CV",
    district: user.district || "N/A",
    application_date: user.dateOfBirth
      ? new Date(user.dateOfBirth).toISOString().split("T")[0] // Extract only the date
      : "N/A", // Fallback if dateOfBirth is not available
  }));

  // Column definitions
  const columns = [
    { id: "nic", label: "NIC", numeric: false },
    { id: "name", label: "Name", numeric: true },
    { id: "mobile", label: "Mobile number", numeric: true },
    { id: "cv", label: "CV Fror", numeric: true },
    { id: "district", label: "District", numeric: true },
    { id: "application_date", label: "Application date", numeric: true },
    {
      id: "lifecycle",
      label: "Life cycle",
      numeric: false,
      renderCell: (row) => (
        <Button
          color="primary"
          variant="contained"
          onClick={() => alert(`Editing ${row.name}`)}
        >
          Life cycle
        </Button>
      ),
    },
    {
      id: "edit",
      label: "Edit",
      numeric: false,
      renderCell: (row) => (
        <Button
          color="primary"
          variant="contained"
          onClick={() => handleEdit(row.user)}
        >
          Edit
        </Button>
      ),
    },
    {
      id: "approve",
      label: "Approve",
      numeric: false,
      renderCell: (row) => (
        <Button
          color="success"
          variant="contained"
          onClick={() => handleApprove(row.id, "approve")}
        >
          Approve
        </Button>
      ),
    },
    {
      id: "decline",
      label: "Decline",
      numeric: false,
      renderCell: (row) => (
        <Button
          color="error"
          variant="contained"
          onClick={() => handleApprove(row.id, "decline")}
        >
          Decline
        </Button>
      ),
    },
    {
      id: "viewcv",
      label: "View CV",
      numeric: false,
      renderCell: (row) => (
        <Button
          color="primary"
          variant="contained"
          onClick={() => alert(`Editing ${row.name}`)}
        >
          View CV
        </Button>
      ),
    },
  ];

  const defaultValues = formFields.reduce((acc, field) => {
    let fieldName = field.name; // The dynamic field name
    acc[fieldName] = selectedUser?.[fieldName] || ""; // Use bracket notation to access the property
    return acc;
  }, {});

  console.log("default values", defaultValues);

  // Loading state
  if (loading) return <div>Loading...</div>;

  // Error state
  if (error) return <div>{error}</div>;

  return selectedUser ? (
    <ReusableForm
      fields={formFields}
      defaultValues={defaultValues}
      onSubmit={onSubmit}
    />
  ) : (
    <Box
      sx={{
        padding: 7,
        maxWidth: "1250px",
        margin: "30px auto",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      {" "}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 4,
        }}
      >
        <Typography
          sx={{
            textAlign: "left",
            color: "#4C585B",
            fontSize: 24,
          }}
        >
          Approve CVs (CVs to be approved)
        </Typography>
        <Button color="primary" variant="contained">
          Approve CVs
        </Button>
      </Box>
      <ReusableTable rows={rows} columns={columns} title="Nutrition Table" />
    </Box>
  );
};

export default ApprovedCv;
