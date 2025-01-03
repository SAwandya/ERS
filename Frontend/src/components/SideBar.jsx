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
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const drawerWidth = 240;

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
    { text: "Home", icon: <DashboardIcon />, path: "/" },
    {
      text: "Manage Cv",
      icon: <PeopleIcon />,
      isDropdown: true,
      subItems: [
        { text: "Add New CV", path: "/addnewcv" },
        { text: "View All CV", path: "/viewallcv" },
        { text: "Approved CV", path: "/approvedcv" },
      ],
    },

    { text: "Intern status", icon: <DashboardIcon />, path: "/" },
    {
      text: "Interviews",
      icon: <PeopleIcon />,
      isDropdown: true,
      subItems: [
        { text: "All Interviews", path: "/allinterviews" },
        { text: "Add New Interview", path: "/addnewinterview" },
      ],
    },
    {
      text: "Assign to Scheme",
      icon: <DashboardIcon />,
      path: "/assigntoscheme",
    },
    { text: "Life cycle", icon: <DashboardIcon />, path: "/lifecycle" },

    {
      text: "Schemes",
      icon: <PeopleIcon />,
      isDropdown: true,
      subItems: [
        { text: "View All Schemes", path: "/viewallschemes" },
        { text: "Add New Schemes", path: "/addnewschemes" },
      ],
    },
    { text: "Requests", icon: <DashboardIcon />, path: "/requests" },

    {
      text: "Manage Institutes",
      icon: <PeopleIcon />,
      isDropdown: true,
      subItems: [
        { text: "All registration requests", path: "/instituterequest" },
        { text: "Add new institutes", path: "/addnewinstitute" },
      ],
    },
  ];

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
        {menuItems.map((item) => (
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
