import React from "react";
import useRecordStore from "../store/useRecordStore";
import Swal from "sweetalert2";

const SaleTableRowComponent = ({
  record: {
    id,
    cost,
    quantity,
    product_id,
    product: { product_name, price },
  },
  index,
}) => {
  const { removeRecord,changeQuantity } = useRecordStore();
  const deleteBtnHandle = () => {
    Swal.fire({
      title: "Are you sure to delete?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0e7490",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        removeRecord(id);
        Swal.fire({
          confirmButtonColor: "#0e7490",
          title: "Deleted!",
          text: "Your product has been deleted.",
          icon: "success"
        });
      }
    });
  };

  const quantityIncreaseHandle = () => {
    changeQuantity(id, 1);
  };

  const quantityDecreaseHandle = () => {
    quantity > 1 && changeQuantity(id, -1);
  };
  return (
    <>
      <tr
        data-testid="table-row-element"
        className="group/row odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 bg-white dark:border-gray-700 dark:bg-gray-800"
      >
        <td className="px-6 py-4 group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {index + 1}
        </td>
        <td className="px-6 py-4 group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {product_id}
        </td>
        <td className="px-6 py-4 group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {product_name}
        </td>
        <td className="px-6 py-4 group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg text-end">
          {price}
        </td>
        <td className="px-6 py-4 group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg text-end">
          <div className=" flex justify-end gap-2 items-center">
            <button
            onClick={quantityDecreaseHandle}
              type="button"
              className="group relative flex items-stretch justify-center p-0.5 text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none :ring-cyan-700 border border-gray-200 bg-white text-gray-900 focus:text-cyan-700 focus:ring-4 enabled:hover:bg-gray-100 enabled:hover:text-cyan-700 dark:border-gray-600 dark:bg-transparent dark:text-gray-400 dark:enabled:hover:bg-gray-700 dark:enabled:hover:text-white rounded-lg print:hidden"
            >
              <span className="flex items-stretch transition-all duration-200 rounded-md px-2 py-1 text-xs">
                -
              </span>
            </button>
            <span>{quantity}</span>
            <button
            onClick={quantityIncreaseHandle}
              type="button"
              className="group relative flex items-stretch justify-center p-0.5 text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none :ring-cyan-700 border border-gray-200 bg-white text-gray-900 focus:text-cyan-700 focus:ring-4 enabled:hover:bg-gray-100 enabled:hover:text-cyan-700 dark:border-gray-600 dark:bg-transparent dark:text-gray-400 dark:enabled:hover:bg-gray-700 dark:enabled:hover:text-white rounded-lg print:hidden"
            >
              <span className="flex items-stretch transition-all duration-200 rounded-md px-2 py-1 text-xs">
                +
              </span>
            </button>
          </div>
        </td>
        <td className="px-6 py-4 group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg text-end">
          {cost}
        </td>
        <td className="px-6 py-4 group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg">
          <button
            onClick={deleteBtnHandle}
            type="button"
            className="group relative flex items-stretch justify-center p-0.5 text-center transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none rounded-lg font-medium text-cyan-600 hover:underline dark:text-cyan-500 print:hidden"
          >
            <span className="flex items-stretch transition-all duration-200 rounded-md px-4 py-2 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </span>
          </button>
        </td>
      </tr>
    </>
  );
};

export default SaleTableRowComponent;
