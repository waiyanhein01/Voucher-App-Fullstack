import React from "react";
import useSWR from "swr";
import api from "../api/Api";
import { useForm } from "react-hook-form";
import useRecordStore from "../store/useRecordStore";

const fetcher = (url) => fetch(url).then((res) => res.json());

const SaleProductFormComponent = () => {
  const { data, isLoading, error } = useSWR(api + "/products", fetcher);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { addRecord, records, changeQuantity } = useRecordStore();
  const productFormHandle = (data) => {
    const currentProduct = JSON.parse(data.product);

    const isExited = records.find(
      (record) => record.product.id === currentProduct.id
    );
    if (isExited) {
      changeQuantity(isExited.id, data.quantity);
    } else {
      addRecord({
        product_id: currentProduct.id,
        product: currentProduct,
        quantity: data.quantity,
        cost: data.quantity * currentProduct.price,
        created_at: new Date().toISOString(),
      });
    }
    reset();
  };
  return (
    <div className=" shadow rounded-lg p-4 mb-3">
      <form onSubmit={handleSubmit(productFormHandle)}>
        <div className=" grid grid-cols-5 gap-3 mb-3">
          <div className=" col-span-5 md:col-span-2">
            <div className="mb-2 block">
              <label
                className="text-sm font-medium text-gray-900 dark:text-white"
                data-testid="flowbite-label"
                htmlFor="products"
              >
                Select Product
              </label>
            </div>
            <div className="flex">
              <div className="relative w-full">
                <select
                  {...register("product", { required: true })}
                  className="block outline-none w-full border disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg"
                  id="product"
                  required
                >
                  {!isLoading &&
                    data?.data?.map((product) => (
                      <option key={product.id} value={JSON.stringify(product)}>
                        {product.product_name}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>
          <div className=" col-span-5 md:col-span-2">
            <div className="mb-2 block">
              <label
                className={`text-sm font-medium ${
                  errors.quantity ? "text-red-500" : "text-gray-900"
                } dark:text-white`}
                data-testid="flowbite-label"
                htmlFor="quantity"
              >
                Quantity
              </label>
            </div>
            <div className="flex">
              <div className="relative w-full">
                <input
                  {...register("quantity", { required: true })}
                  className={`block w-full border outline-none disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 text-gray-900 border-gray-300 ${
                    errors.quantity
                      ? "border-red-500"
                      : "border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
                  }  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg`}
                  type="number"
                  id="quantity"
                />
                {errors.quantity && (
                  <span className=" text-red-500 text-xs">
                    Please fill out this field.
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className=" col-span-5 md:col-span-1">
            <button
              type="submit"
              className="group relative p-0.5 text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none border border-transparent bg-cyan-700 text-white focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-cyan-800 dark:bg-cyan-600 dark:focus:ring-cyan-800 dark:enabled:hover:bg-cyan-700 rounded-lg w-full h-full flex justify-center items-center"
            >
              Add Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SaleProductFormComponent;
