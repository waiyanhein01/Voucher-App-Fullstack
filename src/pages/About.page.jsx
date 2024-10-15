import React from "react";
import ContainerComponent from "../components/Container.component";
import BreadcrumbComponent from "../components/Breadcrumb.component";
import AboutComponent from "../components/About.component";

const AboutPage = () => {
  return (
    <ContainerComponent>
      <BreadcrumbComponent currentPage={"About Module"} />
      <AboutComponent />
    </ContainerComponent>
  );
};

export default AboutPage;
