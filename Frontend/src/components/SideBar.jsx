// components/Sidebar.jsx
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ErrorIcon from "@mui/icons-material/Error";

const Sidebar = () => {
  const drawerWidth = 240;

  const menuItems = [
    { text: "Overview", icon: <DashboardIcon /> },
    { text: "Customers", icon: <PeopleIcon /> },
    { text: "Integrations", icon: <IntegrationInstructionsIcon /> },
    { text: "Settings", icon: <SettingsIcon /> },
    { text: "Account", icon: <AccountCircleIcon /> },
    { text: "Error", icon: <ErrorIcon /> },
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
          <ListItem button key={item.text}>
            <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
