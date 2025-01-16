// App.jsx
import { Box, CssBaseline } from "@mui/material";
import Topbar from "./components/Topbar";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/SideBar";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <RouterProvider router={router} />
      </Box>
    </AuthProvider>
  );
}

export default App;
