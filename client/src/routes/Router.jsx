
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Root from "../layouts/Root";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);
