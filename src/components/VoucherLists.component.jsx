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
import useCookie from "react-use-cookie";
import { useLocation, useSearchParams } from "react-router-dom";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const VoucherListsComponent = () => {
  const [userToken, setUserToken] = useCookie("my_token");
  const location = useLocation(); // 1.for get params endpoints
  const [param, setParam] = useSearchParams(); //3. for change url params(dynamically)

  const fetcher = (url) =>
    fetch(url, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    }).then((r) => r.json());
  const [fetchUrl, setFetchUrl] = useState(api + "/vouchers" + location.search);
  const { data, isLoading, error } = useSWR(fetchUrl, fetcher);

  const fetchUrlHandler = (url) => {
    // console.log(url);
    const currentUrl = new URL(url); // 2.for get fetch api url
    const newSearchParam = new URLSearchParams(currentUrl.search);
    const paramObject = Object.fromEntries(newSearchParam.entries());
    setParam(paramObject);
    setFetchUrl(url);
  };

  const searchHandler = debounce((e) => {
    if (e.target.value) {
      setParam({ q: e.target.value });
      setFetchUrl(api + "/vouchers?q=" + e.target.value);
    } else {
      setParam({});
      setFetchUrl(api + "/vouchers");
    }
  }, 500);

  const sortTotalAscHandler = async () => {
    setParam({});
    setFetchUrl(api + "/vouchers?sort_by=total&sort_direction=asc");
  };

  const sortTotalDescHandler = async () => {
    setParam({});
    setFetchUrl(api + "/vouchers?sort_by=total&sort_direction=desc");
  };

  const sortIdAscHandler = async () => {
    setParam({});
    setFetchUrl(api + "/vouchers?sort_by=id&sort_direction=asc");
  };

  const sortIdDescHandler = async () => {
    setParam({});
    setFetchUrl(api + "/vouchers?sort_by=id&sort_direction=desc");
  };

  // console.log(data)
  return (
    <div className="">
      <SearchCreateBtnComponent
        onChange={searchHandler}
        url={"/dashboard/sale"}
        btnName={"Create New Voucher"}
        placeholder={"Search voucher"}
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
      <div className="relative overflow-x-auto shadow-md rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-50 uppercase bg-cyan-700 dark:bg-cyan-800 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                <span className=" flex items-center justify-between">
                  <span className="">ID</span>
                  <span className=" flex flex-col">
                    <button onClick={sortIdAscHandler} className="">
                      <HiChevronUp className=" size-4" />
                    </button>
                    <button onClick={sortIdDescHandler} className="">
                      <HiChevronDown className=" size-4" />
                    </button>
                  </span>
                </span>
              </th>
              <th scope="col" className="px-6 py-3 text-nowrap">
                Customer Name
              </th>
              <th scope="col" className="px-6 py-3 text-nowrap">
                Customer Email
              </th>
              <th scope="col" className="px-6 py-3 text-right text-nowrap">
                Slip ID
              </th>
              <th scope="col" className="px-6 py-3 text-right text-nowrap">
                Sale date
              </th>
              <th scope="col" className="px-6 py-3 text-right">
              <span className=" flex items-center justify-between">
                  <span className="">Total(MMK)</span>
                  <span className=" flex flex-col">
                    <button onClick={sortTotalAscHandler} className="">
                      <HiChevronUp className=" size-4" />
                    </button>
                    <button onClick={sortTotalDescHandler} className="">
                      <HiChevronDown className=" size-4" />
                    </button>
                  </span>
                </span>
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
        <PaginationComponents
          links={data.links}
          meta={data.meta}
          fetchUrlHandler={fetchUrlHandler}
        />
      )}
    </div>
  );
};

export default VoucherListsComponent;
