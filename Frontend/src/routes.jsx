import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import AddNewCv from "./components/content/AddNewCv";
import ApprovedCv from "./components/content/ApprovedCv";
import ViewAllCv from "./components/content/ViewAllCv";
import Home from "./components/content/Home";
import Register from "./pages/Register";
import AllInterviews from "./components/content/AllInterviews";
import NewInterviews from "./components/content/NewInterviews";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
            <Home />
        ),
      },
      {
        path: "/addnewcv",
        element: (
            <AddNewCv />
        ),
      },
      {
        path: "/viewallcv",
        element: (
            <ViewAllCv />
        ),
      },
      {
        path: "/approvedcv",
        element: (
            <ApprovedCv/>
        ),
      },
      {
        path: "/allinterviews",
        element: (
            <AllInterviews/>
        ),
      },
      {
        path: "/newinterviews",
        element: (
            <NewInterviews/>
        ),
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
