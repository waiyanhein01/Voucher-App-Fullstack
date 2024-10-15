import React from 'react'
import BreadcrumbComponent from '../components/Breadcrumb.component'
import ContainerComponent from '../components/Container.component'
import VoucherInfoComponent from '../components/VoucherInfo.component'

const SalePage = () => {
  return (
    <ContainerComponent>
      <BreadcrumbComponent currentPage={"Sale Module"}/>
      <VoucherInfoComponent/>
    </ContainerComponent>
  )
}

export default SalePage
