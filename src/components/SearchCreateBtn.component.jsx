import React from "react";
import { HiMagnifyingGlass, HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";

const SearchCreateBtnComponent = ({placeholder,btnName,url,icon,className,onChange}) => {
  return (
    <div className=" grid grid-cols-12 mb-3 gap-3">
      <div className="relative col-span-12 md:col-span-8">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <HiMagnifyingGlass className=" text-stone-400" />
        </div>
        <input
          type="text"
          id="input-group-1"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 outline-none block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
      <div className=" col-span-12 md:col-span-4 ">
        <Link to={url} className={`${className} text-white flex justify-center items-center gap-1 bg-cyan-700 hover:bg-cyan-800 focus:ring-2 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-700 dark:hover:bg-cyan-800 dark:focus:ring-cyan-800`}>
          {btnName}
          {icon}
        </Link>
      </div>
    </div>
  );
};

export default SearchCreateBtnComponent;
