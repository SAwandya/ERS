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
        element: <AddNewCv />,
      },
      {
        path: "/viewallcv",
        element: <ViewAllCv />,
      },
      {
        path: "/approvedcv",
        element: <ApprovedCv />,
      },
      {
        path: "/addnewinstitute",
        element: <AddNewInstitute />,
      },
      {
        path: "/instituterequest",
        element: <InstitutesRegistrationRequest />,
      },
      {
        path: "/internstatus",
        element: <InternStatus />,
      },
      {
        path: "/viewallschemes",
        element: <ViewAllSchemes />,
      },
      {
        path: "/addnewschemes",
        element: <AddNewSchemes />,
      },
    ],
  },

  {
    path: "/signup",
    element: <Register />,
  },

  //   {
  //     path: "/signin",
  //     element: <SignInForm />,
  //   },
]);

export default router;
