import React, { useState } from "react";
import {

  HiOutlineIdentification,
  HiOutlineKey,
} from "react-icons/hi2";
import { Link } from "react-router-dom";
import LogoutBtnComponent from "./LogoutBtn.component";
import useProfileStore from "../store/useProfileStore";
import ChangeImageComponent from "./ChangeImage.component";
import { HiChevronDown } from "react-icons/hi";

const ProfileComponent = () => {
  // const [profileToken, setProfileToken] = useCookie("my_profile");
  // const { name, profile_image,email } = JSON.parse(profileToken);
  const {
    user: { profile_image },
  } = useProfileStore();

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
        <div className=" relative flex flex-col items-center">
          <div className="  border rounded-full overflow-hidden">
            <img
              className="w-12 h-12 object-cover object-top"
              src={
                profile_image
                  ? profile_image
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdO2DCDcfM7yDAtEo797CkSw_njibgz-lOgw&s"
              }
            />

            <div className=" absolute right-1 bottom-0">
              <HiChevronDown className="w-[15px] h-[15px] text-slate-50 bg-slate-700 rounded-full border border-black" />
            </div>
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
        <ChangeImageComponent />
        <nav
          aria-label="side navigation"
          className="flex-1 divide-y divide-slate-100 overflow-auto"
        >
          <div>
            <ul className="flex flex-1 flex-col gap-1 py-3">
              <li className="px-3">
                <Link
                  onClick={drawerHandler}
                  to={"/dashboard/change-username"}
                  className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-cyan-50 hover:text-cyan-500 focus:bg-cyan-50 aria-[current=page]:bg-cyan-50 aria-[current=page]:text-cyan-500 "
                >
                  <HiOutlineIdentification className="h-5 w-5" />
                  {/* <HiOutlineAdjustmentsVertical /> */}
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Change Username
                  </div>
                </Link>
              </li>
              <li className="px-3">
                <Link
                  onClick={drawerHandler}
                  to={"/dashboard/change-password"}
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
