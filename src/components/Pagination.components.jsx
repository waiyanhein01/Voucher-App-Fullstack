import React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const PaginationComponents = ({
  // links: { next, prev },
  meta: { from, to, total, links },
  fetchUrlHandler,
}) => {
  const handlePaginationHandler = (url) => {
    fetchUrlHandler(url);
  };
  // const handleNextHandler = () => {
  //   fetchUrlHandler(next);
  // };
  // console.log(links)
  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:justify-between md:items-center gap-3 mt-5">
      <div className="text-sm text-gray-700 dark:text-gray-400">
        Showing
        <b className="font-semibold text-gray-900 dark:text-white"> {from}</b> to
        <b className="font-semibold text-gray-900 dark:text-white"> {to}</b> of 
        <b className="font-semibold text-gray-900 dark:text-white"> {total} </b>
        Entries
      </div>
      <div className="inline-flex mt-2 xs:mt-0">
        {links.map((link) => {
          return (
            <button
              key={link.label}
              onClick={handlePaginationHandler.bind(null, link.url)}
              disabled={!link.url}
              className={`flex items-center justify-center first:rounded-l-lg last:rounded-r-lg border disabled:pointer-events-none disabled:opacity-50 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-cyan-800 hover:text-cyan-50 ${link.active ? "bg-cyan-700 text-cyan-50" : "bg-gray-50"} dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              {link.label === "&laquo; Previous" ? (
                <HiChevronLeft />
              ) : link.label === "Next &raquo;" ? (
                <HiChevronRight />
              ) : (
                link.label
              )}
            </button>
          );
        })}

        {/* <button
              onClick={handleNextHandler}
              disabled={!next}
              className="flex items-center justify-center disabled:pointer-events-none disabled:opacity-50 px-4 py-2 text-sm font-medium text-gray-900 bg-gray-50 border-0 border-s border-gray-200 rounded-e-lg hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </button> */}
      </div>
    </div>
  );
};

export default PaginationComponents;
