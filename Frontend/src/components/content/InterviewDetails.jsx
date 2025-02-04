import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReusableTable from "../ReusableTable";
import useEmployeeQueryStore from "../../store";

const InterviewDetails = () => {
  const { id } = useParams();

  const [shedules, setShedules] = useState([]);

  useEffect(() => {
    const fetchInterview = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/schedule/interview/${id}`
        );
        setShedules(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchInterview();
  }, [id]);

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
          EDIT
        </Button>
      ),
    },
    {
      id: "action",
      label: "View",
      numeric: false,
      renderCell: (row) => (
        <Button
          color="primary"
          variant="contained"
          onClick={() => alert(`View ${row.name}`)}
        >
          VIEW
        </Button>
      ),
    },
  ];

  const selectedRow = useEmployeeQueryStore((state) => state.selectedRow);

  const handlePassFail = async (status) => {
    const requestData = {
      scheduleIdList: selectedRow,
      status: status,
    };
    await axios
      .put("http://localhost:3000/api/schedule/status", requestData)
      .then((res) => {
        console.log(res.data);
        alert(`Status updated to ${status}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            onClick={() => handlePassFail(true)}
            color="secondary"
            variant="contained"
          >
            Pass
          </Button>
          <Button
            onClick={() => handlePassFail(false)}
            color="error"
            variant="contained"
          >
            Fail
          </Button>
        </Box>
      </Box>
      <ReusableTable rows={rows} columns={columns} />
    </Box>
  );
};

export default InterviewDetails;
