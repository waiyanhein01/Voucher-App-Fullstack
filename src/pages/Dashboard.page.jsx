import React from "react";
import ModuleBtnComponent from "../components/ModuleBtn.component";
import {
  HiCircleStack,
  HiDocumentText,
  HiMiniComputerDesktop,
  HiShieldCheck,
} from "react-icons/hi2";
import ContainerComponent from "../components/Container.component";

const DashboardPage = () => {
  return (
    <ContainerComponent>
      <div className=" grid md:grid-cols-2 grid-rows-2 gap-3">
        <div className=" col-span-1">
          <ModuleBtnComponent
            name="Product"
            icon={<HiCircleStack className=" size-16" />}
            url="/dashboard/products"
          />
        </div>

        <div className=" col-span-1">
          <ModuleBtnComponent
            name="Sale"
            icon={<HiMiniComputerDesktop className=" size-16" />}
            url="/dashboard/sale"
          />
        </div>

        <div className=" col-span-1">
          <ModuleBtnComponent
            name="Voucher"
            icon={<HiDocumentText className=" size-16" />}
            url="/dashboard/vouchers"
          />
        </div>

        <div className=" col-span-1">
          <ModuleBtnComponent
            name="About"
            icon={<HiShieldCheck className=" size-16" />}
            url="/dashboard/about"
          />
        </div>
      </div>
    </ContainerComponent>
  );
};

export default DashboardPage;
