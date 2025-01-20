import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import AddNewCv from "./components/content/AddNewCv";
import ApprovedCv from "./components/content/ApprovedCv";
import ViewAllCv from "./components/content/ViewAllCv";
import Home from "./components/content/Home";
import Register from "./pages/Register";
import InstitutesRegistrationRequest from "./components/content/InstitutesRegistrationRequest";
import AddNewInstitute from "./components/content/AddNewInstitute";
import InternStatus from "./components/content/InternStatus";
import ViewAllSchemes from "./components/content/ViewAllSchemes";
import AddNewSchemes from "./components/content/AddNewSchemes";
import AssignToScheme from "./components/content/AssignToScheme";
import LifeCycle from "./components/content/LifeCycle";
import Requests from "./components/content/Requests";
import AllInterviews from "./components/content/AllInterviews";
import AddNewInterview from "./components/content/AddNewInterview";
import InterviewDetails from "./components/content/InterviewDetails";
import AllSupervisors from "./components/content/AllSupervisors";
import ManageSupervisors from "./components/content/ManageSupervisors";
import SignIn from "./pages/SignIn";
import ProtectedRoute from "./components/ProtectedRoute";
import IndividualHome from "./components/content/IndividualHome";
import BankDetails from "./components/content/BankDetails";
import Help from "./components/content/Help";
import RoleBasedProtectedRoute from "./components/RoleBasedProtectedRoute";
import Unauthorized from "./pages/Unauthorized";
import ViewCv from "./components/content/ViewCv";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/addnewcv",
        element: (
          <RoleBasedProtectedRoute allowedRoles={["admin"]}>
            <AddNewCv />
          </RoleBasedProtectedRoute>
        ),
      },
      {
        path: "/viewallcv",
        element: (
          <RoleBasedProtectedRoute allowedRoles={["admin"]}>
            <ViewAllCv />
          </RoleBasedProtectedRoute>
        ),
      },
      {
        path: "/approvedcv",
        element: (
          <RoleBasedProtectedRoute allowedRoles={["admin"]}>
            <ApprovedCv />
          </RoleBasedProtectedRoute>
        ),
      },
      {
        path: "/addnewinstitute",
        element: (
          <RoleBasedProtectedRoute allowedRoles={["admin"]}>
            <AddNewInstitute />
          </RoleBasedProtectedRoute>
        ),
      },
      {
        path: "/instituterequest",
        element: (
          <RoleBasedProtectedRoute allowedRoles={["admin"]}>
            <InstitutesRegistrationRequest />
          </RoleBasedProtectedRoute>
        ),
      },
      {
        path: "/internstatus",
        element: (
          <RoleBasedProtectedRoute allowedRoles={["admin"]}>
            <InternStatus />
          </RoleBasedProtectedRoute>
        ),
      },
      {
        path: "/viewallschemes",
        element: (
          <RoleBasedProtectedRoute allowedRoles={["admin"]}>
            <ViewAllSchemes />
          </RoleBasedProtectedRoute>
        ),
      },
      {
        path: "/addnewschemes",
        element: (
          <RoleBasedProtectedRoute allowedRoles={["admin"]}>
            <AddNewSchemes />
          </RoleBasedProtectedRoute>
        ),
      },
      {
        path: "/assigntoscheme",
        element: (
          <RoleBasedProtectedRoute allowedRoles={["admin"]}>
            <AssignToScheme />
          </RoleBasedProtectedRoute>
        ),
      },
      {
        path: "/lifecycle",
        element: (
          <RoleBasedProtectedRoute allowedRoles={["admin"]}>
            <LifeCycle />
          </RoleBasedProtectedRoute>
        ),
      },
      {
        path: "/requests",
        element: (
          <RoleBasedProtectedRoute allowedRoles={["admin"]}>
            <Requests />
          </RoleBasedProtectedRoute>
        ),
      },
      {
        path: "/allinterviews",
        element: (
          <RoleBasedProtectedRoute allowedRoles={["admin"]}>
            <AllInterviews />
          </RoleBasedProtectedRoute>
        ),
      },
      {
        path: "/addnewinterview",
        element: (
          <RoleBasedProtectedRoute allowedRoles={["admin"]}>
            <AddNewInterview />
          </RoleBasedProtectedRoute>
        ),
      },
      {
        path: "/interviewdetails/:id",
        element: (
          <RoleBasedProtectedRoute allowedRoles={["admin"]}>
            <InterviewDetails />
          </RoleBasedProtectedRoute>
        ),
      },
      {
        path: "/allsupervisors/:id",
        element: (
          <RoleBasedProtectedRoute allowedRoles={["admin"]}>
            <AllSupervisors />
          </RoleBasedProtectedRoute>
        ),
      },
      {
        path: "/managesupervisors",
        element: (
          <RoleBasedProtectedRoute allowedRoles={["admin"]}>
            <ManageSupervisors />
          </RoleBasedProtectedRoute>
        ),
      },
      {
        path: "/individualhome",
        element: (
          <RoleBasedProtectedRoute allowedRoles={["individual"]}>
            <IndividualHome />
          </RoleBasedProtectedRoute>
        ),
      },
      {
        path: "/bankdetails",
        element: (
          <RoleBasedProtectedRoute allowedRoles={["individual"]}>
            <BankDetails />
          </RoleBasedProtectedRoute>
        ),
      },
      {
        path: "/help",
        element: (
          <RoleBasedProtectedRoute allowedRoles={["individual"]}>
            <Help />
          </RoleBasedProtectedRoute>
        ),
      },
    ],
  },

  {
    path: "/signup",
    element: <Register />,
  },

  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/unauthorized",
    element: <Unauthorized />,
  },
]);

export default router;
