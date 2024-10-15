import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "../api/Api";
import { tailspin } from "ldrs";
import { useSWRConfig } from "swr";
import toast from "react-hot-toast";

tailspin.register();

const CreateProductCardComponent = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { mutate } = useSWRConfig();

  const [isSending, setIsSending] = useState(false);

  const nav = useNavigate();

  const createFormHandle = async (data) => {
    setIsSending(true);
    const res = await fetch(api + "/products", {
      method: "POST",
      body: JSON.stringify({
        product_name: data.product_name,
        price: data.price,
        created_at: new Date().toISOString(),
      }),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    });
    mutate(api + "/products");
    setIsSending(false);
    const resJson = await res.json();
    if (res.status === 201) {
      toast.success("Product created successfully");
    } else {
      toast.error(resJson.message);
    }
    if (data.after_save) {
      nav("/product");
    }
    reset();
  };
  return (
    <div className=" w-full md:w-1/2 border rounded-lg p-5">
      <h1 className=" text-xl font-bold">Create New Product</h1>
      <p className=" text-stone-500 text-sm">
        Building a new product is essential for the growth and sustainability of
        your business.
      </p>

      <form onSubmit={handleSubmit(createFormHandle)} className=" mt-5">
        <div>
          <label
            htmlFor="product_name"
            className={`block mb-1 text-sm font-medium ${
              errors.product_name ? "text-red-500" : "text-gray-900"
            } dark:text-white`}
          >
            New Product Name
          </label>
          <input
            {...register("product_name", {
              required: true,
              minLength: 3,
              maxLength: 50,
            })}
            type="text"
            id="product_name"
            className={`bg-gray-50 border outline-none text-gray-900 text-sm rounded-lg ${
              errors.product_name
                ? "focus:ring-red-500 border-red-500 focus:border-red-500"
                : "focus:ring-cyan-700 border-gray-300 focus:border-cyan-800"
            } block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-700 dark:focus:border-cyan-800`}
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
            New Product Price
          </label>
          <input
            {...register("price", { required: true, min: 100, max: 20000 })}
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
            className="w-4 h-4 text-cyan-700 bg-gray-100 border-gray-300 rounded focus:ring-cyan-600 dark:focus:ring-cyan-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
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
            {...register("after_save")}
            id="after_save"
            type="checkbox"
            defaultValue
            className="w-4 h-4 text-cyan-700 bg-gray-100 border-gray-300 rounded focus:ring-cyan-600 dark:focus:ring-cyan-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="after_save"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Back to after save?
          </label>
        </div>

        <div className=" mt-3">
          <Link
            to={"/product"}
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-cyan-800 focus:z-10 focus:ring-1 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Cancel
          </Link>

          <button
            disabled={isSending}
            type="submit"
            className="disabled:opacity-40 text-white inline-flex gap-2 bg-cyan-700 hover:bg-cyan-800 focus:ring-1 focus:ring-cyan-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            <span>Create Product</span>
            {isSending && (
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
    </div>
  );
};

export default CreateProductCardComponent;
