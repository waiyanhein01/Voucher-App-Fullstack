import React from "react";
import ContainerComponent from "../components/Container.component";
import BreadcrumbComponent from "../components/Breadcrumb.component";
import EditProductCardComponent from "../components/EditProductCard.component";

const EditProductPage = () => {
  return (
    <ContainerComponent>
      <BreadcrumbComponent
        currentPage={"Edit Product"}
        links={[{ title: "Product Module", path: "/product" }]}
      />
      <EditProductCardComponent/>
    </ContainerComponent>
  );
};

export default EditProductPage;
