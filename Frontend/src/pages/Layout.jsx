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

      <Box
        sx={{
          flexGrow: 1,
          maxHeight: "calc(100vh - 80px)", // Adjust height to fit inside the sidebar
          overflowY: "auto", // Enables scrolling
          "&::-webkit-scrollbar": {
            width: "5px", // Make the scrollbar smaller
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888", // Change scrollbar color
            borderRadius: "10px", // Round the scrollbar
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#555", // Darker color on hover
          },
        }}
      >
        <Topbar />
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
