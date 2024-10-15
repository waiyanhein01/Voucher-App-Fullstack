import React from 'react'
import BreadcrumbComponent from '../components/Breadcrumb.component'
import ProductListsComponent from '../components/ProductLists.component'
import ContainerComponent from '../components/Container.component'

const ProductPage = () => {
  return (
    <ContainerComponent>
      <BreadcrumbComponent currentPage={"Product Module"}/>
      <ProductListsComponent/>
    </ContainerComponent>
  )
}

export default ProductPage
