import React from 'react'
import ContainerComponent from '../components/Container.component'
import BreadcrumbComponent from '../components/Breadcrumb.component'
import VoucherListsComponent from '../components/VoucherLists.component'

const VoucherPage = () => {
  return (
    <ContainerComponent>
      <BreadcrumbComponent currentPage={"Voucher Module"}/>
      <VoucherListsComponent/>
    </ContainerComponent>
  )
}

export default VoucherPage
