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
          <ProtectedRoute>
            <AddNewCv />
          </ProtectedRoute>
        ),
      },
      {
        path: "/viewallcv",
        element: (
          <ProtectedRoute>
            <ViewAllCv />
          </ProtectedRoute>
        ),
      },
      {
        path: "/approvedcv",
        element: (
          <ProtectedRoute>
            <ApprovedCv />
          </ProtectedRoute>
        ),
      },
      {
        path: "/addnewinstitute",
        element: (
          <ProtectedRoute>
            <AddNewInstitute />
          </ProtectedRoute>
        ),
      },
      {
        path: "/instituterequest",
        element: (
          <ProtectedRoute>
            <InstitutesRegistrationRequest />
          </ProtectedRoute>
        ),
      },
      {
        path: "/internstatus",
        element: (
          <ProtectedRoute>
            <InternStatus />
          </ProtectedRoute>
        ),
      },
      {
        path: "/viewallschemes",
        element: (
          <ProtectedRoute>
            <ViewAllSchemes />
          </ProtectedRoute>
        ),
      },
      {
        path: "/addnewschemes",
        element: (
          <ProtectedRoute>
            <AddNewSchemes />
          </ProtectedRoute>
        ),
      },
      {
        path: "/assigntoscheme",
        element: (
          <ProtectedRoute>
            <AssignToScheme />
          </ProtectedRoute>
        ),
      },
      {
        path: "/lifecycle",
        element: (
          <ProtectedRoute>
            <LifeCycle />
          </ProtectedRoute>
        ),
      },
      {
        path: "/requests",
        element: (
          <ProtectedRoute>
            <Requests />
          </ProtectedRoute>
        ),
      },
      {
        path: "/allinterviews",
        element: (
          <ProtectedRoute>
            <AllInterviews />
          </ProtectedRoute>
        ),
      },
      {
        path: "/addnewinterview",
        element: (
          <ProtectedRoute>
            <AddNewInterview />
          </ProtectedRoute>
        ),
      },
      {
        path: "/interviewdetails/:id",
        element: (
          <ProtectedRoute>
            <InterviewDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "/allsupervisors/:id",
        element: (
          <ProtectedRoute>
            <AllSupervisors />
          </ProtectedRoute>
        ),
      },
      {
        path: "/managesupervisors",
        element: (
          <ProtectedRoute>
            <ManageSupervisors />
          </ProtectedRoute>
        ),
      },
      {
        path: "/individualhome",
        element: (
          <ProtectedRoute>
            <IndividualHome />
          </ProtectedRoute>
        ),
      },
      {
        path: "/bankdetails",
        element: (
          <ProtectedRoute>
            <BankDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "/help",
        element: (
          <ProtectedRoute>
            <Help />
          </ProtectedRoute>
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
