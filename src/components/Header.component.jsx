import React from "react";
import ContainerComponent from "./Container.component";
import { Link, useNavigate } from "react-router-dom";
import ProfileComponent from "./Profile.component";

const HeaderComponent = () => {
  const nav = useNavigate();
  const backToHomeHeader = () => {
    nav("/dashboard");
  };

  return (
    <ContainerComponent className={"mb-5"}>
      <div className="flex justify-between items-center border-b-2 border-gray-100">
        <div className="">
          <h1
            onClick={backToHomeHeader}
            className=" text-3xl font-bold cursor-pointer"
          >
            Voucher App
          </h1>
          <h2 className=" text-stone-500">MMS Solution</h2>
        </div>
        <ProfileComponent />
      </div>
    </ContainerComponent>
  );
};

export default HeaderComponent;
