import React from "react";
import { HiOutlineAdjustments } from "react-icons/hi";

const SortDropdownComponent = ({
  sortMinimumTotalHandler,
  sortCustomerNameHandler,
  sortDefaultHandler,
}) => {
  return (
    <div>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        // type="button"
      >
        <HiOutlineAdjustments className=" w-5 h-5 mr-1" />
        Sort
      </button>

      <div
        id="dropdown"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li className="hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            <button
              onClick={sortDefaultHandler}
              className="block px-4 py-2  dark:hover:text-white"
            >
              Default
            </button>
          </li>
          <li className="hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            <button
              onClick={sortCustomerNameHandler}
              className="block px-4 py-2"
            >
              Sort by Name
            </button>
          </li>
          <li className="hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            <button
              onClick={sortMinimumTotalHandler}
              className="block px-4 py-2"
            >
              Sort by Total
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SortDropdownComponent;
