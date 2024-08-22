import React, { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SidebarDashboard from "../sections/sidebar/sidebar";
import { Drawer } from "@mui/material";
import { MenuIcon } from "@heroicons/react/solid";
import { XIcon } from "@heroicons/react/solid";

const Layout = ({ children }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const handleOpen = () => {
    setMobileMenu(true);
  };
  const handleClose = () => {
    setMobileMenu(false);
  };
  const location = useLocation();
  const currentPath = location.pathname;
  const NavLink = [
    {
      id: 1,
      link: "/dashboard/dashboard",
      text: "My Dashboard",
      iconSrc: "/icons/database.svg",
    },
    {
      id: 2,
      link: "/dashboard/team",
      text: "My Team",
      iconSrc: "/icons/team.png",
    },
    {
      id: 3,
      link: "/dashboard/mission",
      text: "Missions",
      iconSrc: "/icons/mission.png",
    },
  ];

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 1024 && mobileMenu) {
      setMobileMenu(false);
    }
  }, [mobileMenu]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);
  return (
    <>
      <div className="relative flex h-full">
        <div className="lg:w-[15%]  hidden lg:block bg-[#6739A6]">
          <SidebarDashboard NavLink={NavLink} currentPath={currentPath} />
        </div>
        <div className="w-full lg:w-[85%] bg-[#e2e1e1] relative">
          <div className="min-h-screen ">{children}</div>
        </div>
      </div>
      {/* MobileView Icon */}
      <div className="absolute z-10 top-[20px] left-[20px]">
        <button
          onClick={handleOpen}
          type="button"
          className="transition-all duration-300 lg:hidden"
        >
          <MenuIcon className="h-9 w-9" />
        </button>
      </div>
      {/* Drawer */}
      <Drawer
        open={mobileMenu}
        onClose={handleClose}
        classes={{ paper: "w-full max-w-[15rem] h-full" }}
        anchor="left"
        style={{ zIndex: 20 }}
      >
        <div className="flex justify-between px-4 py-4 bg-[#6739A6]">
          <Link
            to="/"
            className="flex items-center"
            onClick={handleClose}
          ></Link>
          <button onClick={handleClose} type="button">
            <XIcon className="w-6 text-white h-7" />
          </button>
        </div>
        <div className="relative flex flex-col h-full py-4 lg:py-8 bg-[#6739A6]">
          <div className="flex flex-col items-center justify-center">
            <img
              src="/icons/profile.jpg"
              alt=""
              className="flex object-cover object-top w-24 h-28"
            />
            <div className="flex flex-col items-center justify-center py-2 text-white ">
              <span className="font-bold">Hassan Ahmed</span>
              <span className="text-sm">Manager</span>
            </div>
            <div className="w-full px-4 space-y-2">
              <div className="flex justify-between text-sm text-white">
                <span>740/1000</span>
                <span>Level 8</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700">
                <div className="bg-[#FFBC2A] h-2 rounded-full w-[45%]"></div>
              </div>

              <div className="flex items-baseline space-x-2 text-xs text-white">
                <img src="/icons/trophy.png" alt="" className="w-4" />
                <span>35 Awards</span>
              </div>
            </div>
          </div>
          <div className="w-full py-8">
            {NavLink.map((item) => (
              <div key={item.id} className="flex justify-center w-full">
                <Link to={item.link} className="w-full">
                  <div
                    className={`${
                      currentPath === item.link
                        ? "flex justify-start items-center bg-[#784CAB] space-x-2 py-3 "
                        : "flex justify-start items-center space-x-2 py-3 "
                    }`}
                  >
                    <div className="flex items-center justify-center ml-8 space-x-2">
                      <img
                        src={item.iconSrc}
                        alt=""
                        className="object-cover object-center w-4 max-w-4"
                      />
                      <h2 className="text-sm text-white">{item.text}</h2>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Layout;
