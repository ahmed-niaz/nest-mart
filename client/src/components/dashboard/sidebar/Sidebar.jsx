import { Link } from "react-router-dom";

import logo from "../../../assets/logo.png";

import useAuth from "../../../hooks/useAuth";

import useRole from "../../../hooks/useRole";
import {   LogOut } from "lucide-react";

import BuyerMenu from "./menu/BuyerMenu";
import AdminMenu from "./menu/AdminMenu";
import Loader from "../../shared/Loader";
import SellerMenu from "./menu/SellerMenu";

const Sidebar = () => {
  const { logout } = useAuth();
  const [role, isLoading] = useRole();

  if(isLoading) return <Loader/>

  return (
    <>
     

      {/* Sidebar */}
      <div className="z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform md:translate-x-0  transition duration-200 ease-in-out">
        <div>
          <div>
            <div className="w-full  md:flex px-4 py-2  rounded-lg justify-center items-center  mx-auto">
              <Link to="/">
                <img
                  // className='hidden md:block'
                  src={logo}
                  alt="logo"
                  width="200"
                  height="100"
                />
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {/*  Menu Items */}
            <nav>
              {role === "buyer" && <BuyerMenu />}
              {role === "admin" && <AdminMenu />}
              {role === 'seller' && <SellerMenu/>}
            </nav>
          </div>
        </div>

        <div>
          <hr />

          <button
            onClick={logout}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <LogOut className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
