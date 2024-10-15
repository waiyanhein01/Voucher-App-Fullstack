import React, { useRef, useState } from "react";
import useSWR from "swr";
import api from "../api/Api";
import VoucherListRowComponent from "./VoucherListRow.component";
import ProductEmptyRowComponent from "./ProductEmptyRow.component";
import VoucherSkeletonComponent from "./VoucherSkeleton.component";
import SearchCreateBtnComponent from "./SearchCreateBtn.component";
import { HiMiniComputerDesktop, HiXMark } from "react-icons/hi2";
import { debounce } from "lodash";
import PaginationComponents from "./Pagination.components";

const fetcher = (url) => fetch(url).then((r) => r.json());

const VoucherListsComponent = () => {
  const [fetchUrl, setFetchUrl] = useState(api + "/vouchers");
  const { data, isLoading, error } = useSWR(
    fetchUrl,
    fetcher
  );

  const searchHandler = debounce((e) => {
    setFetchUrl(api + "/vouchers?q=" + e.target.value);
  }, 500);

  const fetchUrlHandler = (url) => {
    setFetchUrl(url);
  }
  return (
    <div className="">
      <SearchCreateBtnComponent
        onChange={searchHandler}
        url={"/sale"}
        btnName={"Create New Voucher"}
        placeholder={"Search voucher(eg-ZS9D17M268)"}
        icon={<HiMiniComputerDesktop className=" size-5" />}
      />
      <h1 className=" text-xl mb-2 font-semibold">
        Voucher List Table
        {/* ( 
        <span className=" text-cyan-700">
          {isLoading ? (
            <div className="h-4 bg-gray-200 inline-flex rounded-full dark:bg-gray-700 w-5 animate-pulse"></div>
          ) : (
            data.data.length
          )}
        </span>
        ) */}
      </h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                id
              </th>
              <th scope="col" className="px-6 py-3 text-nowrap">
                Customer Name
              </th>
              <th scope="col" className="px-6 py-3 text-nowrap">
                Customer Email
              </th>
              <th scope="col" className="px-6 py-3 text-right text-nowrap">
                Voucher ID
              </th>
              <th scope="col" className="px-6 py-3 text-right text-nowrap">
                Sale date
              </th>
              <th scope="col" className="px-6 py-3 text-right">
                Price
              </th>
              <th scope="col" className="px-6 py-3 text-right">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <VoucherSkeletonComponent />
            ) : data.data.length === 0 ? (
              <ProductEmptyRowComponent
                title={"There is no voucher."}
                colSpan={7}
              />
            ) : (
              data?.data?.map((voucher, index) => (
                <VoucherListRowComponent
                  key={voucher.id}
                  voucher={voucher}
                  index={index}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
      {!isLoading && (
        <PaginationComponents links={data.links} meta={data.meta} fetchUrlHandler={fetchUrlHandler} />
      )}
    </div>
  );
};

export default VoucherListsComponent;
