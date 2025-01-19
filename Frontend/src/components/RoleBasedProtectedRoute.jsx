import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

const RoleBasedProtectedRoute = ({ allowedRoles }) => {
  const { authToken, getCurrentUser } = useAuth();

  if (!authToken) {
    // Redirect to login if not authenticated
    return <Navigate to="/signin" />;
  }

  const { role } = getCurrentUser();

  if (!allowedRoles.includes(role)) {
    // Redirect to unauthorized page for role mismatch
    return <Navigate to="/unauthorized" />;
  }

  // Render child routes if role matches
  return <Outlet />;
};

export default RoleBasedProtectedRoute;
