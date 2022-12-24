import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Login from "../../LonginAndRegister/Login";
import Register from "../../LonginAndRegister/Register";
import Home from "../../pages/Homepage/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
    ],
  },
]);
