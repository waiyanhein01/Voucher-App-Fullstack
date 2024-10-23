import React from "react";
import ContainerComponent from "./Container.component";
import { useNavigate } from "react-router-dom";
import useCookie from "react-use-cookie";

const HeaderComponent = () => {
  const nav = useNavigate();
  const [profileToken, setProfileToken] = useCookie("my_profile");
  const backToHomeHeader = () => {
    nav("/dashboard");
  };

  const { name, profile_image } = JSON.parse(profileToken);


  return (
    <ContainerComponent className={"mb-5"}>
      <div className="flex justify-between items-center">
        <div className="">
          <h1
            onClick={backToHomeHeader}
            className=" text-3xl font-bold cursor-pointer"
          >
            Voucher App
          </h1>
          <h2 className=" text-stone-500">MMS Solution</h2>
        </div>

        <div className=" flex flex-col items-center">
          <div className="relative w-8 h-8 object-cover  overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <img
              src={
                profile_image ? (
                  profile_image
                ) : (
                  <svg
                    className="absolute w-10 h-10 text-gray-400 -left-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      // fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      // clip-rule="evenodd"
                    ></path>
                  </svg>
                )
              }
            />
          </div>
          <h2 className=" text-stone-500 text-xs mt-2">{name}</h2>
        </div>
      </div>
    </ContainerComponent>
  );
};

export default HeaderComponent;
