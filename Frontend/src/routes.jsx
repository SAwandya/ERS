import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import AddNewCv from "./components/content/AddNewCv";
import ApprovedCv from "./components/content/ApprovedCv";
import ViewAllCv from "./components/content/ViewAllCv";
import Home from "./components/content/Home";
import Register from "./pages/Register";

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
        path: "/viewallinductions",
        element: <ViewAllInductions />,
      },
      {
        path: "/assigninterns",
        element: <AssignInterns />,
        element: <AddNewCv />,
      },
      {
        path: "/viewallcv",
        element: <ApprovedCv />,
      },
      {
        path: "/approvedcv",
        element: <AddNewCv />,
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
