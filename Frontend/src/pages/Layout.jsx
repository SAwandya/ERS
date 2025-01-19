import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/SideBar";
import Topbar from "../components/Topbar";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <>
      <Sidebar />

      <Box sx={{ flexGrow: 1 }}>
        <Topbar />
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
