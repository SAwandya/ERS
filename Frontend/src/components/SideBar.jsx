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
    {
      text: "Manage Institutes",
      icon: <PeopleIcon />,
      isDropdown: true,
      subItems: [
        { text: "All registration requests", path: "/instituterequest" },
        { text: "Add new institutes", path: "/addnewinstitute" },
      ],
    },
    {
      text: "Integrations",
      icon: <IntegrationInstructionsIcon />,
      path: "/integrations",
    },
    { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
    { text: "Account", icon: <AccountCircleIcon />, path: "/account" },
    { text: "Error", icon: <ErrorIcon />, path: "/error" },
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
        <Typography variant="h6">DeviasKit</Typography>
      </Box>
      <List>
        {menuItems.map((item) => (
          <Box key={item.text}>
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
