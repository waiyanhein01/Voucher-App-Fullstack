import React, { useState } from "react";
import BreadcrumbComponent from "../components/Breadcrumb.component";
import ContainerComponent from "../components/Container.component";
import { useForm } from "react-hook-form";
import api from "../api/Api";
import useCookie from "react-use-cookie";
import toast, { Toaster } from "react-hot-toast";
import useProfileStore from "../store/useProfileStore";

const ChangeUserNamePage = () => {
  const { register, handleSubmit,reset } = useForm();
  const [userToken,setUserToken] = useCookie("my_token");
  const [profileToken, setProfileToken] = useCookie("my_profile");

  const {setUser} = useProfileStore();

  const [isLoading, setIsLoading] = useState(false);

  const changeUserNameBtnHandler = async(data) => {
  setIsLoading(true);
    const res = await fetch(api + "/user-profile/change-name", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${userToken}`,
      },
      body: JSON.stringify(data),
    })

    const json = await res.json();

    if (res.status === 200) {
      toast.success("Username changed successfully");
      setProfileToken(JSON.stringify(json.user));
      setUser(json.user);
      setIsLoading(false);
      reset();
    } else {
      toast.error(json.message);
    }
  };
  return (
    <ContainerComponent>
      <BreadcrumbComponent currentPage={"Change Username"} />
      <Toaster position="top-right" />
      <form
        onSubmit={handleSubmit(changeUserNameBtnHandler)}
        className=" border w-[400px] p-5 rounded-lg"
      >
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            New Username
          </label>
          <input
          {...register("name")}
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 outline-none text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
            placeholder="eg. John"
            required
          />
        </div>
        <div className=" flex items-center justify-end mt-5">
          <button
          disabled={isLoading}
            type="submit"
            className="text-white disabled:pointer-events-none disabled:opacity-50 bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-cyan-600 dark:hover:bg-cyan-700 focus:outline-none dark:focus:ring-cyan-800"
          >
            {isLoading ? "Loading..." : "Change"}
          </button>
        </div>
      </form>
    </ContainerComponent>
  );
};

export default ChangeUserNamePage;
