import { Box, Typography, TextField, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReusableTable from "../ReusableTable";
import axios from "axios";
import ReusablePopup from "../ReusablePopup";
import useEmployeeQueryStore from "../../store";
import { ToastContainer, toast, Bounce } from "react-toastify";

const ViewAllCv = () => {
  const [age, setAge] = React.useState("");
  const [users, setUsers] = useState([]); // State to store fetched data
  const [loading, setLoading] = useState(true); // State to track loading
  const [error, setError] = useState(""); // State to handle errors
  const [interviews, setInterview] = useState([]); // State to store fetched data

  const [open, setOpen] = useState(false);

  const selectedRow = useEmployeeQueryStore((state) => state.selectedRow);

  const onSubmit = async (data) => {
    const sheduledata = {
      interview: data.interview,
      userIds: selectedRow,
    };

    await axios
      .post("http://localhost:3000/api/schedule", sheduledata)
      .then((res) => {
        setOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Make a GET request to your API
        const response = await axios.get("http://localhost:3000/api/interview");
        setInterview(response.data); // Update state with fetched data
      } catch (err) {
        setError("Error fetching data"); // Handle errors
      }
    };

    fetchUsers(); // Call the function
  }, []); // Empty dependency array ensures this runs only once

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
    refno: user._id,
    nic: user.nic,
    user: user,
    interntype: user.ApplyAs || "N/A", // Fallback if interntype is not available
    name: user.fullName || "Unknown", // Use dynamic data or fallback value
    district: user.district || "N/A",
    institute: user.institute || "N/A",
    application_date: user.dateOfBirth
      ? new Date(user.dateOfBirth).toISOString().split("T")[0] // Extract only the date
      : "N/A", // Fallback if dateOfBirth is not available
  }));

  // Column definitions
  const columns = [
    { id: "nic", label: "NIC", numeric: false },
    { id: "refno", label: "Ref No", numeric: false },
    { id: "name", label: "Name", numeric: false },
    { id: "cvfrom", label: "CV From", numeric: true },
    { id: "interntype", label: "Intern Type", numeric: true },
    { id: "district", label: "District", numeric: true },
    { id: "application_date", label: "Application date", numeric: true },
    { id: "institute", label: "Institute", numeric: true },

    {
      id: "lifecycle",
      label: "Life cycle",
      numeric: false,
      renderCell: (row) => (
        <Button
          color="primary"
          variant="contained"
          onClick={() => alert(`Life cycle ${row.name}`)}
        >
          Life cycle
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
          onClick={() => alert(`View ${row.name}`)}
        >
          View CV
        </Button>
      ),
    },
    {
      id: "delete",
      label: "Delete",
      numeric: false,
      renderCell: (row) => (
        <Button
          color="primary"
          variant="contained"
          onClick={() => alert(`Delete ${row.name}`)}
        >
          View CV
        </Button>
      ),
    },
  ];

  const fields = [
    {
      name: "interview",
      label: "INTERVIEW",
      type: "select",
      options: interviews.map((interview) => ({
        value: interview._id,
        label: interview.label,
      })),
      rules: { required: "Interview is required" },
    },
    {
      name: "scheme",
      label: "SELECT SCHEME",
      type: "select",
      options: [
        { value: "schedue_01", label: "schedue_01" },
        { value: "schedue_02", label: "schedue_02" },
      ],
      rules: { required: "Scheme is required" },
    },
  ];

  const handleSheduleInterview = () => {
    if (!selectedRow) {
      toast.warn("Please select intern!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      console.log("Please select a row");
    } else {
      setOpen(true);
    }
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  // Loading state
  if (loading) return <div>Loading...</div>;

  // Error state
  if (error) return <div>{error}</div>;

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
      <Box
        sx={{
          padding: 7,
          maxWidth: "1200px",
          margin: "20px auto",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <Typography
          sx={{
            textAlign: "left",
            color: "#4C585B",
            fontSize: 24,
            marginBottom: 4,
          }}
        >
          View All Approved CVs
        </Typography>

        <ReusableTable rows={rows} columns={columns} />
        <ReusablePopup
          open={open}
          onClose={() => setOpen(false)}
          fields={fields}
          onSubmit={onSubmit}
        />
      </Box>
    </>
  );
};

export default ViewAllCv;
