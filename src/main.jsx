import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import AuthProvider from "./components/AuthProvider/AuthProvider.jsx";
import "./index.css";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/LoginRegister/Login.jsx";
import Register from "./pages/LoginRegister/Register.jsx";
import MyBookings from "./pages/MyBookings/MyBookings.jsx";
import Rooms from "./pages/Rooms/Rooms.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
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
        path: "/mybookings",
        element: <MyBookings></MyBookings>,
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
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
