import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import AuthProvider from "./components/AuthProvider/AuthProvider.jsx";
import PrivateRoute from "./components/AuthProvider/PrivateRoute.jsx";
import "./index.css";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/LoginRegister/Login.jsx";
import Register from "./pages/LoginRegister/Register.jsx";
import MyBookings from "./pages/MyBookings/MyBookings.jsx";
import RoomDetails from "./pages/Rooms/RoomDetails.jsx";
import Rooms from "./pages/Rooms/Rooms.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/rooms",
        element: <Rooms></Rooms>,
      },
      {
        path: "/roomdetails/:id",
        element: <RoomDetails></RoomDetails>,
        loader: ({params}) =>
          fetch(
            `https://stay-inn-server.vercel.app/room/${params.id}`
          ),
      },

      {
        path: "/mybookings",
        element: (
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        ),
        // loader: () =>
        //   fetch("https://stay-inn-server.vercel.app/bookedRooms", {credentials: "include"}),
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contactus",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
