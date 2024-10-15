import React from "react";

const VoucherSkeletonLoaderComponent = () => {
  return (
    <div className="">
      <div className="flex justify-between items-start mb-8 animate-pulse">
        <div>
          <div className="h-8 w-32 bg-gray-300 rounded mb-2"></div>
          <div className="h-6 w-20 bg-gray-300 rounded"></div>
        </div>
        <div className="text-right">
          <div className="h-4 w-16 bg-gray-300 rounded mb-2"></div>
          <div className="h-6 w-32 bg-gray-300 rounded"></div>
          <div className="h-6 w-24 bg-gray-300 rounded mt-2"></div>
        </div>
      </div>

      <table className="w-full mb-8 animate-pulse">
        <thead>
          <tr className="border-b-2 border-gray-300">
            <th className="text-left py-2 text-sm">
              <div className="h-4 w-6 bg-gray-300 rounded"></div>
            </th>
            <th className="text-left py-2 text-sm">
              <div className="h-4 w-20 bg-gray-300 rounded"></div>
            </th>
            <th className="text-right py-2 text-sm">
              <div className="h-4 w-10 bg-gray-300 rounded"></div>
            </th>
            <th className="text-right py-2 text-sm">
              <div className="h-4 w-10 bg-gray-300 rounded"></div>
            </th>
            <th className="text-right py-2 text-sm">
              <div className="h-4 w-10 bg-gray-300 rounded"></div>
            </th>
          </tr>
        </thead>
        <tbody>
          {[...Array(4)].map((_, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="py-2 text-sm">
                <div className="h-4 w-6 bg-gray-300 rounded"></div>
              </td>
              <td className="py-2 text-sm">
                <div className="h-4 w-32 bg-gray-300 rounded"></div>
              </td>
              <td className="text-right py-2 text-sm">
                <div className="h-4 w-8 bg-gray-300 rounded"></div>
              </td>
              <td className="text-right py-2 text-sm">
                <div className="h-4 w-8 bg-gray-300 rounded"></div>
              </td>
              <td className="text-right py-2 text-sm">
                <div className="h-4 w-8 bg-gray-300 rounded"></div>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="border-b border-gray-200">
            <td colSpan={4} className="py-2 text-right text-sm">
              <div className="h-4 w-28 inline-flex me-5 bg-gray-300 rounded"></div>
            </td>
            <td className="py-2 text-sm">
              <div className="h-4 w-10 inline-flex bg-gray-300 rounded"></div>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td colSpan={4} className="py-2 text-right text-sm">
              <div className="h-4 w-28 inline-flex me-5 bg-gray-300 rounded"></div>
            </td>
            <td className="py-2 text-sm">
              <div className="h-4 w-10 inline-flex bg-gray-300 rounded"></div>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td colSpan={4} className="py-2 text-right text-sm">
              <div className="h-4 w-28 inline-flex me-5 bg-gray-300 rounded"></div>
            </td>
            <td className="py-2 text-sm">
              <div className="h-4 w-10 inline-flex bg-gray-300 rounded"></div>
            </td>
          </tr>
        </tfoot>
      </table>

      <div className="flex justify-between items-center text-xs mb-8 animate-pulse">
        <div className="">
          <div className="h-4 w-32 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 w-32 bg-gray-300 rounded mb-1"></div>
          <div className="h-4 w-32 bg-gray-300 rounded mb-1"></div>
          <div className="h-4 w-32 bg-gray-300 rounded mb-1"></div>

        </div>
        <div className="">
          <div className="h-6 w-16 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 w-32 bg-gray-300 rounded mb-1"></div>
          <div className="h-4 w-32 bg-gray-300 rounded mb-1"></div>
          <div className="h-4 w-32 bg-gray-300 rounded mb-1"></div>
        </div>
      </div>

      <div className="border-t-2 border-gray-300 pt-4 animate-pulse">
        <div className="h-4 w-32 bg-gray-300 rounded mx-auto"></div>
      </div>
    </div>
  );
};

export default VoucherSkeletonLoaderComponent;
