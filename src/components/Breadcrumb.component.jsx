import React from "react";
import { HiMiniChevronRight, HiMiniHome } from "react-icons/hi2";
import { Link } from "react-router-dom";

const BreadcrumbComponent = ({ currentPage, links }) => {
  return (
    <div className=" mb-5">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              to={"/"}
              className="inline-flex items-center text-sm font-medium text-stone-500 dark:text-stone-400 dark:hover:text-white"
            >
              {<HiMiniHome className="mx-1 size-4" />}
              Home
            </Link>
          </li>

          {links && links.map((link,index) => (
            <li key={index} className="inline-flex items-center">
            <HiMiniChevronRight className=" size-6 text-stone-500" />
            <Link
              to={link.path}
              className=" inline-flex items-center text-sm font-medium text-stone-500 dark:text-stone-400 dark:hover:text-white"
            >
              {link.title}
            </Link>
          </li>
          ))}

          <li>
            <div className="flex items-center">
              <HiMiniChevronRight className=" size-6" />
              <h1 className=" text-sm font-medium text-stone-700 dark:text-gray-400 dark:hover:text-white">
                {currentPage}
              </h1>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default BreadcrumbComponent;
