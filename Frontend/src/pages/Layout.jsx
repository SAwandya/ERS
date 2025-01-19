import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/SideBar";
import Topbar from "../components/Topbar";
import { Box } from "@mui/material";
import RoleBasedProtectedRoute from "../components/RoleBasedProtectedRoute";

const Layout = () => {
  return (
    <>
      <RoleBasedProtectedRoute allowedRoles={["admin", "individual"]}>
        <Sidebar />
      </RoleBasedProtectedRoute>

      <Box sx={{ flexGrow: 1 }}>
        <Topbar />
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
