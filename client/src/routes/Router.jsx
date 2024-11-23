import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Root from "../layouts/Root";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Products from "../pages/products/Products";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import DashboardLayout from "../layouts/DashboardLayout";
import ProtectedRoutes from "./ProtectedRoutes";
import WishList from "../components/dashboard/buyer/WishList";
import Cart from "../components/dashboard/buyer/Cart";
import ManageUsers from "../components/dashboard/admin/ManageUsers";
import AddProduct from "../components/dashboard/seller/AddProduct";
import MyProductList from "../components/dashboard/seller/MyProductList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/product",
        element: <Products />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoutes>
        <DashboardLayout />
      </ProtectedRoutes>
    ),
    children: [
      {
        path: "manage-users",
        element: <ManageUsers />,
      },
      {
        path: "wishlist",
        element: (
          <ProtectedRoutes>
            <WishList />
          </ProtectedRoutes>
        ),
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "my-list",
        element: <MyProductList />,
      },
    ],
  },
]);
