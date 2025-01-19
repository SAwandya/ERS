import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  Collapse,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ErrorIcon from "@mui/icons-material/Error";
import WorkIcon from "@mui/icons-material/Work";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useAuth } from "../Context/AuthContext";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const drawerWidth = 240;

  const { getCurrentUser, authToken } = useAuth();

  const { role } = getCurrentUser();

  // State to track which dropdown is open
  const [openDropdowns, setOpenDropdowns] = useState({});

  // Handle toggle for each dropdown
  const handleDropdownToggle = (menuText) => {
    setOpenDropdowns((prevState) => ({
      ...prevState,
      [menuText]: !prevState[menuText], // Toggle the state for the clicked menu
    }));
  };

  const menuItems = [
    { text: "Home", icon: <DashboardIcon />, path: "/", role: "admin" },
    {
      text: "Manage Cv",
      icon: <PeopleIcon />,
      isDropdown: true,
      subItems: [
        { text: "Add New CV", path: "/addnewcv" },
        { text: "View All CV", path: "/viewallcv" },
        { text: "Approved CV", path: "/approvedcv" },
      ],
      role: "admin",
    },

    {
      text: "Intern status",
      icon: <DashboardIcon />,
      path: "/",
      role: "admin",
    },
    {
      text: "Interviews",
      icon: <PeopleIcon />,
      isDropdown: true,
      subItems: [
        { text: "All Interviews", path: "/allinterviews" },
        { text: "Add New Interview", path: "/addnewinterview" },
      ],
      role: "admin",
    },
    {
      text: "Assign to Scheme",
      icon: <DashboardIcon />,
      path: "/assigntoscheme",
      role: "admin",
    },
    {
      text: "Life cycle",
      icon: <DashboardIcon />,
      path: "/lifecycle",
      role: "admin",
    },

    {
      text: "Schemes",
      icon: <PeopleIcon />,
      isDropdown: true,
      subItems: [
        { text: "View All Schemes", path: "/viewallschemes" },
        { text: "Add New Schemes", path: "/addnewschemes" },
      ],
      role: "admin",
    },
    {
      text: "Requests",
      icon: <DashboardIcon />,
      path: "/requests",
      role: "admin",
    },

    {
      text: "Manage Institutes",
      icon: <PeopleIcon />,
      isDropdown: true,
      subItems: [
        { text: "All registration requests", path: "/instituterequest" },
        { text: "Add new institutes", path: "/addnewinstitute" },
      ],
      role: "admin",
    },
    {
      text: "Manage Supervisor",
      icon: <DashboardIcon />,
      path: "/managesupervisors",
      role: "admin",
    },
    {
      text: "Individual Home",
      icon: <DashboardIcon />,
      path: "/individualhome",
      role: "individual",
    },
    {
      text: "Bank Details",
      icon: <DashboardIcon />,
      path: "/bankdetails",
      role: "individual",
    },
    {
      text: "Help",
      icon: <DashboardIcon />,
      path: "/help",
      role: "individual",
    },
  ];

  // Filter menu items based on role
  const filteredMenuItems = menuItems.filter(
    (item) => item.role === role || !item.role
  );

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          backgroundColor: "#1a1c23",
          color: "white",
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <img
          src="../src/assets/sltlogo.png"
          alt="Logo"
          style={{
            width: "90%",
            height: "auto",
          }}
        />
      </Box>
      <List
        sx={{
          scrollbarWidth: "none", // Hides scrollbar in Firefox
          "&::-webkit-scrollbar": {
            display: "none", // Hides scrollbar in Chrome, Edge, Safari
          },
        }}
      >
        {filteredMenuItems.map((item) => (
          <Box
            sx={{
              scrollbarWidth: "none", // Hides scrollbar in Firefox
              "&::-webkit-scrollbar": {
                display: "none", // Hides scrollbar in Chrome, Edge, Safari
              },
            }}
            key={item.text}
          >
            <ListItem
              button
              onClick={
                item.isDropdown
                  ? () => handleDropdownToggle(item.text)
                  : () => navigate(item.path)
              }
              sx={{
                backgroundColor:
                  location.pathname === item.path
                    ? "rgba(255, 255, 255, 0.08)"
                    : "transparent",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.12)",
                },
              }}
            >
              <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
              {item.isDropdown &&
                (openDropdowns[item.text] ? <ExpandLess /> : <ExpandMore />)}
            </ListItem>

            {item.isDropdown && (
              <Collapse
                in={openDropdowns[item.text]}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {item.subItems.map((subItem) => (
                    <ListItem
                      button
                      key={subItem.text}
                      onClick={() => navigate(subItem.path)}
                      sx={{
                        pl: 4,
                        backgroundColor:
                          location.pathname === subItem.path
                            ? "rgba(255, 255, 255, 0.08)"
                            : "transparent",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.12)",
                        },
                      }}
                    >
                      <ListItemText primary={subItem.text} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </Box>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
