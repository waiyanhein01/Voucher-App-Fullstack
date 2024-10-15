import React from "react";

const VoucherSkeletonComponent = () => {

    const length = 5;
    const number = Array.from({ length }, (_, i) => i + 1);
    
  return (
    <>
      {number.map((num,index) => (
        <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <td className="px-6 py-4">
          <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-8 animate-pulse"></div>
        </td>     
        <td className="px-6 py-4 text-end">
          <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-16 animate-pulse"></div>
        </td>
        <td
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-48 animate-pulse"></div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-16 animate-pulse"></div>
        </td>
        <td className="flex flex-col py-4 items-end justify-center gap-2 text-stone-400">
          <div className="px-6 text-end">
            <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-24 animate-pulse"></div>
          </div>
          <div className="px-6 text-end">
            <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-16 animate-pulse"></div>
          </div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-16 animate-pulse"></div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="inline-flex rounded-md shadow-sm">
            <div className="px-4 py-2 h-8 w-8 bg-gray-200 rounded-l-lg dark:bg-gray-700 animate-pulse"></div>
            <div className="px-4 py-2 h-8 w-8 bg-gray-200 rounded-r-lg dark:bg-gray-700 animate-pulse"></div>
          </div>
        </td>
      </tr>
      ) )}
    </>
  );
};

export default VoucherSkeletonComponent;
