// App.jsx
import { Box, CssBaseline } from "@mui/material";
import Topbar from "./components/Topbar";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/SideBar";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Sidebar/>
      <Box sx={{ flexGrow: 1 }}>
        <Topbar />
        <Dashboard />
      </Box>
    </Box>
  );
}

export default App;
