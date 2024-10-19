import React from "react";

const PaginationComponents = ({links:{next,prev},meta:{from,to,total},fetchUrlHandler}) => {
    const handlePrevHandler = () => {
        fetchUrlHandler(prev); 
    }
    const handleNextHandler = () => {
        fetchUrlHandler(next); 
    }
  return (
    <div className="flex justify-between items-center mt-3">
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Showing <b className="font-semibold text-gray-900 dark:text-white">{from}</b> to <b className="font-semibold text-gray-900 dark:text-white">{to}</b> of <b className="font-semibold text-gray-900 dark:text-white">{total}</b> Entries
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <button onClick={handlePrevHandler} disabled={!prev} className="flex items-center justify-center disabled:pointer-events-none disabled:opacity-50 px-4 py-2 text-sm font-medium text-gray-900 bg-gray-50 rounded-s-lg hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          Prev
        </button>
        <button onClick={handleNextHandler} disabled={!next} className="flex items-center justify-center disabled:pointer-events-none disabled:opacity-50 px-4 py-2 text-sm font-medium text-gray-900 bg-gray-50 border-0 border-s border-gray-200 rounded-e-lg hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationComponents;
