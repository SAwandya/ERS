// components/Topbar.jsx
import { AppBar, Toolbar, IconButton, InputBase, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "../Context/AuthContext";

const Topbar = () => {

  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  }

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {/* <SearchIcon sx={{ mr: 1 }} />
            <InputBase placeholder="Search..." /> */}
          </Box>
        </Box>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
        <IconButton>
          <LogoutIcon onClick={() => handleLogout()} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
