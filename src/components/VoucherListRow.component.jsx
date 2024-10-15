import React, { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi2";
import ShowDateComponent from "./ShowDate.component";
import { useSWRConfig } from "swr";
import api from "../api/Api";
import toast from "react-hot-toast";
import { lineSpinner } from "ldrs";
import { TbListDetails } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

lineSpinner.register();
const VoucherListRowComponent = ({
  voucher: {
    id,
    customer_name,
    customer_email,
    voucher_id,
    sale_date,
    net_total,
  },
  index,
}) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const { mutate } = useSWRConfig();

  const deleteVoucherRowHandler = async () => {
    setIsDeleting(true);
    const res = await fetch(api + "/vouchers/" + id, {
      method: "DELETE",
    });
    console.log(res);
    mutate(api + "/vouchers");
    setIsDeleting(false);

    const resJson = await res.json();

    if (res.status === 200) {
      toast.success(resJson.message);
    }
  };

  const nav = useNavigate();

  // const { id } = useParams();
  const voucherDetailsBtnHandler = () => {
    nav(`/voucher/details/${id}`);
  };

  return (
    <>
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {index + 1}
        </th>
        <td className="px-6 py-4">{customer_name}</td>
        <td className="px-6 py-4">{customer_email}</td>
        <td className="px-6 py-4 text-right text-nowrap">{voucher_id}</td>
        <td className="px-6 py-4 text-right text-nowrap text-xs">
          <ShowDateComponent timestamp={sale_date} />
        </td>
        <td className="px-6 py-4 text-right text-nowrap">{net_total} MMK</td>
        <td className="px-6 py-4 text-end">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={deleteVoucherRowHandler}
              className="w-10 h-8 flex items-center justify-center text-sm font-medium text-red-500 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 focus:z-10 focus:ring-2 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:text-white"
            >
              {isDeleting ? (
                <l-line-spinner
                  size="20"
                  stroke="3"
                  speed="1"
                  color="red"
                ></l-line-spinner>
              ) : (
                <HiOutlineTrash className=" pointer-events-none" />
              )}
            </button>

            <button
              onClick={voucherDetailsBtnHandler}
              className="w-10 h-8 flex items-center justify-center text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 focus:z-10 focus:ring-2 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:text-white"
            >
              <TbListDetails />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default VoucherListRowComponent;
