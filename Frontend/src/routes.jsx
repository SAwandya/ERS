import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import SeatSelection from "./components/SeatSelection";
import MoviePostForm from "./components/MoviePostForm";
import RegisterForm from "./pages/RegisterForm";
import SignInForm from "./pages/SignInForm";
import DashboardLayout from "./pages/DashboardLayout";
import Content from "./components/Content";
import BookingDetails from "./pages/BookingDetails";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import MyBooking from "./pages/MyBooking";
import DashboardProtectedRoute from "./components/DashboardProtectedRoute";
import ImageSlider2 from "./components/ImageSlider2";
import ShowtimeForm from "./components/ShowTimeForm";
import NewDashboard from "./pages/NewDashboard";
import ScannedBookingDetails from "./components/ScannedBookingDetails";
import Profile from "./pages/Profile";
import AddNewCv from "./components/content/AddNewCv";
import ApprovedCv from "./components/content/ApprovedCv";
import ViewAllCv from "./components/content/ViewAllCv";
import Home from "./components/content/Home";

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
            <ViewAllCv />
        ),
      },
      {
        path: "/viewallcv",
        element: (
            <ApprovedCv />
        ),
      },
      {
        path: "/approvedcv",
        element: (
            <AddNewCv/>
        ),
      },
    
    ],
  },

//   {
//     path: "/signup",
//     element: <RegisterForm />,
//   },

//   {
//     path: "/signin",
//     element: <SignInForm />,
//   },
]);

export default router;
