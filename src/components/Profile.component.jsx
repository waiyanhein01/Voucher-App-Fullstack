import React, { useState } from "react";
import { HiCamera, HiOutlineAdjustmentsVertical, HiOutlineKey } from "react-icons/hi2";
import { Link } from "react-router-dom";
import useCookie from "react-use-cookie";
import LogoutBtnComponent from "./LogoutBtn.component";

const ProfileComponent = () => {
  const [profileToken, setProfileToken] = useCookie("my_profile");

  const { name, profile_image,email } = JSON.parse(profileToken);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const drawerHandler = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };
  return (
    <>
      <button
        title="Side navigation"
        type="button"
        className={` ${
          isSideNavOpen
            ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
            : ""
        }`}
        aria-haspopup="menu"
        aria-label="Side navigation"
        aria-expanded={isSideNavOpen ? " true" : "false"}
        aria-controls="nav-menu-4"
        onClick={drawerHandler}
      >
        <div className=" flex flex-col items-center">
          <div className=" border rounded-full overflow-hidden">
            <img
              className="w-10 h-10 object-cover object-top"
              src={
                profile_image
                  ? profile_image
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdO2DCDcfM7yDAtEo797CkSw_njibgz-lOgw&s"
              }
            />
          </div>
        </div>
      </button>

      {/*  <!-- Side Navigation --> */}
      <aside
        id="nav-menu-4"
        aria-label="Side navigation"
        className={`fixed top-0 bottom-0 right-0 z-40 flex w-72 flex-col border-r border-r-slate-200 bg-white transition-transform ${
          isSideNavOpen ? "translate-x-0" : " translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center gap-4 border-b border-slate-200 p-6">
          <div className="shrink-0">
            <div className=" relative border flex h-20 w-20 items-center justify-center rounded-full">
              <img
                className="object-cover object-top max-w-full rounded-full"
                width="100"
                height="100"
                src={
                  profile_image
                    ? profile_image
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdO2DCDcfM7yDAtEo797CkSw_njibgz-lOgw&s"
                }
              />
              <Link className="absolute -bottom-1 right-0 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-gray-300 p-1 text-sm text-white">
                <HiCamera/>
              </Link>
            </div>
          </div>
          <div className="flex min-h-[2rem] w-full min-w-0 flex-col items-start justify-center text-center">
            <h4 className="w-full truncate text-lg font-bold text-slate-700">
              {name}
            </h4>
            <p className="w-full truncate text-sm text-slate-500">
              {email}
            </p>
          </div>
        </div>
        <nav
          aria-label="side navigation"
          className="flex-1 divide-y divide-slate-100 overflow-auto"
        >
          <div>
            <ul className="flex flex-1 flex-col gap-1 py-3">
              <li className="px-3">
                <Link
                to={"/dashboard/change-username"}
                  className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-cyan-50 hover:text-cyan-500 focus:bg-cyan-50 aria-[current=page]:bg-cyan-50 aria-[current=page]:text-cyan-500 "
                >
                  <HiOutlineAdjustmentsVertical className="h-5 w-5" />
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Change Username
                  </div>
                </Link>
              </li>
              <li className="px-3">
                <Link to={"/dashboard/change-password"}
                  className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-cyan-50 hover:text-cyan-500 focus:bg-cyan-50 aria-[current=page]:bg-cyan-50 aria-[current=page]:text-cyan-500 "
                >
                  <HiOutlineKey className="h-5 w-5" />
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Change Password
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <footer className="border-t border-slate-200 p-3">
          <LogoutBtnComponent />
        </footer>
      </aside>

      {/*  <!-- Backdrop --> */}
      <div
        className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-900/20 transition-colors ${
          isSideNavOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsSideNavOpen(false)}
      ></div>
    </>
  );
};

export default ProfileComponent;
