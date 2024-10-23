import React from "react";
import { useNavigate } from "react-router-dom";
import useCookie, { removeCookie } from "react-use-cookie";
import api from "../api/Api";

const LogoutBtnComponent = () => {
  const nav = useNavigate();

  const logoutBtnHandler = () => {
    
    removeCookie("my_token");
    nav("/");
  };
  return (
    <div className=" mt-3 flex justify-end">
      <button
        onClick={logoutBtnHandler}
        className="text-cyan-700 hover:text-white border border-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-cyan-500 dark:text-cyan-500 dark:hover:text-white dark:hover:bg-cyan-500 dark:focus:ring-cyan-800"
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutBtnComponent;
