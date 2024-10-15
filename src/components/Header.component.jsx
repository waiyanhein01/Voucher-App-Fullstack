import React from "react";
import ContainerComponent from "./Container.component";
import { Link, useNavigate } from "react-router-dom";

const HeaderComponent = () => {
  const nav = useNavigate();
  const backToHomeHeader = () => {
    nav("/");
  }
  return (
    <ContainerComponent className={"mb-5"}>
      <div>
        <h1 onClick={backToHomeHeader} className=" text-3xl font-bold cursor-pointer">Voucher App</h1>
        <h2 className=" text-stone-500">MMS Solution</h2>
      </div>
    </ContainerComponent>
  );
};

export default HeaderComponent;
