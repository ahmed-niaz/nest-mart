import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import useAuth from "../../../hooks/useAuth";
import DropdownMenu from "./DropdownMenu";
const Navbar = () => {
  const { user } = useAuth();
  return (
    <main>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="z-10 bg-black text-white dropdown-content  rounded-box  mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/" className="font-bold ">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/product" className=" font-bold ">
                  Product
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className=" font-bold ">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="font-bold ">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/">
            <img className="w-36" src={logo} alt={logo} />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center justify-center gap-4">
            <li>
              <NavLink to="/" className="text-black font-bold ">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/product" className="text-black font-bold ">
                Product
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="text-black font-bold ">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="text-black font-bold ">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <>
            {user ? (
              <DropdownMenu />
            ) : (
              <div className="flex gap-4">
                <Link
                  to="/login"
                  className="px-4 py-3 hover:bg-neutral-100 hover:text-red-600 transition font-semibold bg-black text-white"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-3 hover:bg-neutral-100 hover:text-red-600 transition font-semibold bg-black text-white"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
