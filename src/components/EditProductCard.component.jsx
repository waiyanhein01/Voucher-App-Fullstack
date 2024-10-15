import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "../api/Api";
import { tailspin } from "ldrs";
import useSWR, { useSWRConfig } from "swr";
import toast from "react-hot-toast";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
tailspin.register();

const EditProductCardComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { id } = useParams();

  const { data, isLoading, error } = useSWR(api + `/products/${id}`, fetcher);

  const { mutate } = useSWRConfig();

  const [isUpdating, setIsUpdating] = useState(false);

  const nav = useNavigate();

  const editFormHandle = async (data) => {
    setIsUpdating(true);
    await fetch(api + `/products/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        product_name: data.product_name,
        price: data.price,
        created_at: new Date().toISOString(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    mutate(api + `/products/${id}`);
    setIsUpdating(false);
    toast.success("Edit product successfully");
    if (data.after_save) {
      nav("/product");
    }
  };
  return (
    <div className=" w-full md:w-1/2 border rounded-lg p-5">
      <h1 className=" text-xl font-bold">Edit Product</h1>
      <p className=" text-stone-500 text-sm">
        You can easily update your product name and price.
      </p>

      {isLoading ? (
        <div className="mt-5">
          <div>
            <div className="skeleton-loader h-4 w-40 rounded mb-2">
            </div>
            <div className="skeleton-loader h-10 rounded-lg mb-2"></div>
          </div>

          <div className="mt-3">
            <div className="skeleton-loader h-4 w-40 rounded mb-2">
            </div>
            <div className="skeleton-loader h-10 rounded-lg mb-2"></div>
          </div>

          <div className="flex items-center mt-3">
            <div className="skeleton-loader w-4 h-4 rounded mr-2"></div>
            <div className="skeleton-loader h-4 w-40 rounded"></div>
          </div>

          <div className="flex items-center mt-3">
            <div className="skeleton-loader w-4 h-4 rounded mr-2"></div>
            <div className="skeleton-loader h-4 w-60 rounded"></div>
          </div>

          <div className="mt-3">
            <div className="inline-block skeleton-loader h-10 w-32 rounded-lg mr-2"></div>
            <div className="inline-block skeleton-loader h-10 w-32 rounded-lg"></div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(editFormHandle)} className=" mt-5">
          <div>
            <label
              htmlFor="product_name"
              className={`block mb-1 text-sm font-medium ${
                errors.product_name ? "text-red-500" : "text-gray-900"
              } dark:text-white`}
            >
              Edit Product Name
            </label>
            <input
              {...register("product_name", {
                required: true,
                minLength: 3,
                maxLength: 50,
              })}
              defaultValue={data.data.product_name}
              type="text"
              id="product_name"
              className={`bg-gray-50 border outline-none text-gray-900 text-sm rounded-lg ${
                errors.product_name
                  ? "focus:ring-red-500 border-red-500 focus:border-red-500"
                  : "focus:ring-cyan-700 border-gray-300 focus:border-cyan-800"
              } block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500`}
              placeholder="eg.apple"
            />
            {errors.product_name && (
              <span className=" text-red-500 text-xs">
                Product name must have minimum 3 letters
              </span>
            )}
          </div>

          <div className="mt-3">
            <label
              htmlFor="price"
              className={`block mb-1 text-sm font-medium ${
                errors.price ? "text-red-500" : "text-gray-900"
              } dark:text-white`}
            >
              Edit Product Price
            </label>
            <input
              {...register("price", { required: true, min: 100, max: 20000 })}
              defaultValue={data.data.price}
              type="number"
              id="price"
              className={`bg-gray-50 border outline-none text-gray-900 text-sm rounded-lg ${
                errors.price
                  ? "focus:ring-red-500 border-red-500 focus:border-red-500"
                  : "focus:ring-cyan-700 border-gray-300 focus:border-cyan-800"
              } block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-700 dark:focus:border-cyan-800`}
              placeholder="eg.500"
            />
            {errors.price && (
              <span className="text-red-500 text-xs">
                Product price must have minimum 100
              </span>
            )}
          </div>

          <div className="flex items-center mt-3">
            <input
              {...register("all_correct")}
              id="all_correct"
              type="checkbox"
              defaultValue
              required
              className="w-4 h-4 text-cyan-700 bg-gray-100 border-gray-300 rounded focus:ring-cyan-500 dark:focus:ring-cyan-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="all_correct"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Make sure all fields are correct!
            </label>
          </div>

          <div className="flex items-center mt-3">
            <input
              checked
              {...register("after_save")}
              id="after_save"
              type="checkbox"
              defaultValue
              className="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 rounded focus:ring-cyan-500 dark:focus:ring-cyan-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="after_save"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Back to after update!
            </label>
          </div>

          <div className=" mt-3">
            <Link
              to={"/product"}
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-cyan-500 focus:z-10 focus:ring-1 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="text-white inline-flex gap-2 bg-cyan-500 hover:bg-cyan-600 focus:ring-1 focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              <span>Update Product</span>
              {isUpdating && (
                <l-tailspin
                  size="20"
                  stroke="2"
                  speed="0.9"
                  color="white"
                ></l-tailspin>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default EditProductCardComponent;
