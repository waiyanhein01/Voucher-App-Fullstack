import React, { useState } from "react";
import useSWR from "swr";
import ProductRowComponent from "./ProductRow.component";
import ProductSkeletonComponent from "./ProductSkeleton.component";
import ProductEmptyRowComponent from "./ProductEmptyRow.component";
import api from "../api/Api";
import SearchCreateBtnComponent from "./SearchCreateBtn.component";
import { HiMiniPlus } from "react-icons/hi2";
import { debounce } from "lodash";
import PaginationComponents from "./Pagination.components";
import useCookie from "react-use-cookie";

const ProductListsComponent = () => {
  const [userToken, setUserToken] = useCookie("my_token");
  const fetcher = (url) => fetch(url,{
    headers: {
      "Authorization": `Bearer ${userToken}`
    }
  }).then((res) => res.json());

  const [fetchUrl, setFetchUrl] = useState(api + "/products");
  const { data, isLoading, error } = useSWR(fetchUrl, fetcher);
  const searchHandler = debounce((e) => {
    setFetchUrl(api + "/products?q=" + e.target.value);
  }, 500);
  console.log(data)

  const fetchUrlHandler = (url) => {
    setFetchUrl(url);
  };
// console.log(data)
  return (
    <div>
      <SearchCreateBtnComponent
        onChange={searchHandler}
        url={"create"}
        btnName={"Create New Product"}
        placeholder={"Search products"}
        icon={<HiMiniPlus className=" size-5" />}
      />

      <h1 className=" text-xl mb-2 font-semibold">
        Product List Table
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
                ID
              </th>
              <th scope="col" className="px-6 py-3 text-nowrap">
                Product Name
              </th>
              <th scope="col" className="px-6 py-3 text-nowrap text-end">
                Price(MMK)
              </th>
              <th scope="col" className="px-6 py-3 text-nowrap text-end">
                Created At
              </th>
              <th scope="col" className="px-6 py-3 text-nowrap text-end">
                Updated At
              </th>
              <th scope="col" className="px-6 py-3 text-nowrap text-end">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <ProductSkeletonComponent />
            ) : data?.data?.length === 0 ? (
              <ProductEmptyRowComponent
                colSpan={5}
                title={"There is no product."}
              />
            ) : (
              data?.data?.map((product) => (
                <ProductRowComponent key={product.id} product={product} />
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

export default ProductListsComponent;
