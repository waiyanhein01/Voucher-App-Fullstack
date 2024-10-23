import React from "react";
import { useNavigate } from "react-router-dom";
import useCookie, { removeCookie } from "react-use-cookie";
import api from "../api/Api";
import { HiOutlineArrowLeftStartOnRectangle } from "react-icons/hi2";

const LogoutBtnComponent = () => {
  const nav = useNavigate();

  const logoutBtnHandler = () => {
    
    removeCookie("my_token");
    nav("/");
  };
  return (
    <div className=" flex items-center gap-3 rounded p-3 text-slate-900 transition-colors hover:text-cyan-500">
      <HiOutlineArrowLeftStartOnRectangle className="w-5 h-5"/>
      <button
        onClick={logoutBtnHandler}
        className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate font-medium"
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutBtnComponent;
