import React from "react";
import ContainerComponent from "../components/Container.component";
import BreadcrumbComponent from "../components/Breadcrumb.component";
import CreateProductCardComponent from "../components/CreateProductCard.component";

const CreateProductPage = () => {
  return (
    <ContainerComponent>
      <BreadcrumbComponent
        currentPage={"Create Product"}
        links={[{ title: "Product Module", path: "/product" }]}
      />
      <CreateProductCardComponent/>
    </ContainerComponent>
  );
};

export default CreateProductPage;
