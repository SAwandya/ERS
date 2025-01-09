import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReusableTable from "../ReusableTable";
import useEmployeeQueryStore from "../../store";
import ReusablePopup from "../ReusablePopup";

const InterviewDetails = () => {
  const { id } = useParams();

  const [shedules, setShedules] = useState([]);

  const [supervisors, setSupervisor] = useState([]);

  const selecetedRow = useEmployeeQueryStore((state) => state.selectedRow);

  useEffect(() => {
    const fetchInterview = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/supervisor`
        );
        setSupervisor(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchInterview();
  }, [id]);

  const onSubmit = async (data) => {
    const formData = {
      ...data,
      shedules: selecetedRow,
    };

    await axios
      .post(`http://localhost:3000/api/assignment`, formData)
      .then((res) => {
        console.log(res);
        alert("Assigned to scheme successfully");
      })
      .catch((err) => console.log(err));

    console.log(formData);
  };

  const handleAssignToScheme = () => {
    setOpen(true);
  };

  useEffect(() => {
    const fetchInterview = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/schedule/passed`
        );
        setShedules(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchInterview();
  }, [id]);

  const [open, setOpen] = useState(false);

  const fields = [
    {
      name: "supervisor",
      label: "SUPERVISOR NAME",
      type: "select",
      options: supervisors.map((supervisor) => ({
        value: supervisor._id,
        label: supervisor.supId + supervisor.name,
      })),
      rules: { required: "manager name is required" },
      gridSize: { md: 12 },
    },
    {
      name: "internshipPeriod",
      label: "INTERNSHIP PERIOD(number of months)",
      type: "number",
      rules: { required: "internship period is required" },
      gridSize: { md: 12 },
    },
    {
      name: "internshipStart",
      label: "INTERNSHIP START",
      type: "date",
      rules: { required: "internship start date is required" },
      gridSize: { md: 12 },
    },
    { name: "forRequest", label: "FOR REQUEST", type: "switch" },
  ];

  const rows = shedules.map((shedule) => ({
    id: shedule._id,
    nic: shedule.user.nic,
    refno: shedule.user._id,
    name: shedule.user.fullName,
    category: shedule.user.categoryOfApply,
    mobileNo: shedule.user.mobileNo,
  }));

  const columns = [
    { id: "nic", label: "NIC", numeric: false },
    { id: "refno", label: "REF NO", numeric: true },
    { id: "name", label: "NAME", numeric: true },
    { id: "category", label: "CATEGORY", numeric: true },
    { id: "mobileNo", label: "MOBILE NO", numeric: true },

    {
      id: "lifeCycle",
      label: "Life Cycle",
      numeric: false,
      renderCell: (row) => (
        <Button
          color="primary"
          variant="contained"
          onClick={() => alert(`Life cycle ${row.name}`)}
        >
          Life Cycle
        </Button>
      ),
    },
  ];

  const selectedRow = useEmployeeQueryStore((state) => state.selectedRow);

  return (
    <Box
      sx={{
        padding: 7,
        maxWidth: "1250px",
        margin: "30px auto",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
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
          All sheduled Interviews
        </Typography>

        <Button
          onClick={() => handleAssignToScheme()}
          color="secondary"
          variant="contained"
        >
          Assign to Scheme
        </Button>
      </Box>
      <ReusableTable rows={rows} columns={columns} />
      <ReusablePopup
        open={open}
        onClose={() => setOpen(false)}
        fields={fields}
        onSubmit={onSubmit}
        hedding={"Assign to Scheme"}
      />
    </Box>
  );
};

export default InterviewDetails;
