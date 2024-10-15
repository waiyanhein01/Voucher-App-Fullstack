import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { tailspin } from "ldrs";
import SaleProductFormComponent from "./SaleProductForm.component";
import SaleProductTableComponent from "./SaleProductTable.component";
import useRecordStore from "../store/useRecordStore";
import api from "../api/Api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const VoucherInfoComponent = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  tailspin.register();

  const [isSending, setIsSending] = useState(false);

  const { records, resetRecord } = useRecordStore();

  const generateVoucherID = (length = 10) => {
    const characters = "ABCDE0123456789";
    let voucherID = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      voucherID += characters[randomIndex];
    }

    return voucherID;
  };

  const nav = useNavigate();

  const createVoucherHandle = async (data) => {
    setIsSending(true);
    const total = records.reduce((pv, cv) => {
      return pv + cv.cost;
    }, 0);

    const tax = total * 0.05;

    const net_total = total + tax;
    const currentData = { ...data, records, total, tax, net_total };
    console.log(currentData);

    const res = await fetch(api + "/vouchers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(currentData),
    });

    const resJson = await res.json();

    if (res.status === 201) {
      setIsSending(false);
      toast.success("Create voucher successfully");
      resetRecord();
      reset();
    } else {
      toast.error(resJson.message);
      setIsSending(false);
    }

    if (data.voucher_details) {
      nav("/voucher/details/" + response.id);
    }
  };

  const date = new Date();

  return (
    <div className="">
      <div className=" grid grid-cols-6 gap-3">
        <div className=" shadow rounded-lg p-4 lg:col-span-4 col-span-6">
          <h1 className=" text-xl font-bold mb-3">Product</h1>
          <SaleProductFormComponent />
          <SaleProductTableComponent />
        </div>

        <div className=" lg:col-span-2 col-span-6">
          <form
            className="shadow rounded-lg p-4 grid grid-cols-4 gap-3"
            onSubmit={handleSubmit(createVoucherHandle)}
          >
            <h1 className=" text-xl font-bold mb-3">Voucher</h1>
            <div className="col-span-4">
              <label
                htmlFor="voucher_id"
                className={`block mb-1 text-sm font-medium ${
                  errors.voucher_id ? "text-red-500" : "text-gray-900"
                } dark:text-white`}
              >
                Voucher ID
              </label>
              <input
                {...register("voucher_id", {
                  required: true,
                })}
                defaultValue={generateVoucherID()}
                type="text"
                id="voucher_id"
                className={`bg-gray-50 border outline-none text-gray-900 text-sm rounded-lg ${
                  errors.voucher_id
                    ? "focus:ring-red-500 border-red-500 focus:border-red-500"
                    : "focus:ring-cyan-500 border-gray-300 focus:border-cyan-500"
                } block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500`}
                placeholder="eg.h123123"
              />
              {errors.voucher_id && (
                <span className=" text-red-500 text-xs">
                  Voucher ID is required
                </span>
              )}
            </div>

            <div className="col-span-4">
              <label
                htmlFor="customer_name"
                className={`block mb-1 text-sm font-medium ${
                  errors.customer_name ? "text-red-500" : "text-gray-900"
                } dark:text-white`}
              >
                Customer Name
              </label>
              <input
                {...register("customer_name", {
                  required: true,
                })}
                type="text"
                id="customer_name"
                className={`bg-gray-50 border outline-none text-gray-900 text-sm rounded-lg ${
                  errors.customer_name
                    ? "focus:ring-red-500 border-red-500 focus:border-red-500"
                    : "focus:ring-cyan-500 border-gray-300 focus:border-cyan-500"
                } block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500`}
                placeholder="eg.mgmg"
              />
              {errors.customer_name && (
                <span className=" text-red-500 text-xs">
                  Customer Name is required
                </span>
              )}
            </div>

            <div className="col-span-4">
              <label
                htmlFor="customer_email"
                className={`block mb-1 text-sm font-medium ${
                  errors.customer_email ? "text-red-500" : "text-gray-900"
                } dark:text-white`}
              >
                Customer Email
              </label>
              <input
                {...register("customer_email", {
                  required: true,
                })}
                type="text"
                id="customer_email"
                className={`bg-gray-50 border outline-none text-gray-900 text-sm rounded-lg ${
                  errors.customer_email
                    ? "focus:ring-red-500 border-red-500 focus:border-red-500"
                    : "focus:ring-cyan-500 border-gray-300 focus:border-cyan-500"
                } block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500`}
                placeholder="eg.mg@gmail.com"
              />
              {errors.customer_email && (
                <span className=" text-red-500 text-xs">
                  Customer Email is required
                </span>
              )}
            </div>

            <div className="col-span-4">
              <label
                htmlFor="sale_date"
                className={`block mb-1 text-sm font-medium ${
                  errors.sale_date ? "text-red-500" : "text-gray-900"
                } dark:text-white`}
              >
                Sale Date
              </label>
              <input
                {...register("sale_date", {
                  required: true,
                })}
                type="date"
                id="sale_date"
                className={`bg-gray-50 border outline-none text-gray-900 text-sm rounded-lg ${
                  errors.sale_date
                    ? "focus:ring-red-500 border-red-500 focus:border-red-500"
                    : "focus:ring-cyan-500 border-gray-300 focus:border-cyan-500"
                } block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500`}
                placeholder="eg.h123123"
              />
              {errors.sale_date && (
                <span className=" text-red-500 text-xs">Date is required</span>
              )}
            </div>

            <div className=" col-span-4 flex items-center justify-end">
              <label
                htmlFor="voucher_details"
                className="me-2 text-xs font-medium text-gray-900 dark:text-gray-300"
              >
                Redirect to voucher details.
              </label>
              <input
                {...register("voucher_details")}
                id="voucher_details"
                type="checkbox"
                form="formInfo"
                defaultValue
                className="w-4 h-4 text-cyan-700 bg-gray-100 border-gray-300 rounded focus:ring-cyan-600 dark:focus:ring-cyan-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>

            <div className=" col-span-4 flex items-center justify-end">
              <label
                htmlFor="all_correct"
                className={`me-2 text-xs font-medium text-gray-900 dark:text-gray-300 ${
                  errors.all_correct && "text-red-500"
                }`}
              >
                Make sure all fields are correct!
              </label>
              <input
                {...register("all_correct", { required: true })}
                id="all_correct"
                type="checkbox"
                form="formInfo"
                defaultValue
                className={`w-4 h-4 text-cyan-700 bg-gray-100 border-gray-300 rounded focus:ring-cyan-600 outline-none dark:focus:ring-cyan-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 ${
                  errors.all_correct && " border-red-500 focus:border-red-500"
                }`}
              />
              {/* {errors.all_correct && (
                <span className=" text-red-500 text-xs">Select is required</span>
              )} */}
            </div>

            <div className=" col-span-4 text-right">
              <button
                disabled={isSending}
                type="submit"
                className="disabled:opacity-40 text-white inline-flex gap-2 bg-cyan-700 hover:bg-cyan-800 focus:ring-1 focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-5"
              >
                <span>Confirm Voucher</span>
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
      </div>
    </div>
  );
};

export default VoucherInfoComponent;
