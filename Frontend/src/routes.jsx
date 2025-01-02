import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import AddNewCv from "./components/content/AddNewCv";
import ApprovedCv from "./components/content/ApprovedCv";
import ViewAllCv from "./components/content/ViewAllCv";
import Home from "./components/content/Home";
import Register from "./pages/Register";
import AddNewInstiyute from "./components/content/AddNewInstiyute";
import InstitutesRegistrationRequest from "./components/content/InstitutesRegistrationRequest";

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
        element: <AddNewInstiyute />,
      },
      {
        path: "/instituterequest",
        element: <InstitutesRegistrationRequest />,
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
