import React from 'react'
import ContainerComponent from '../components/Container.component'
import BreadcrumbComponent from '../components/Breadcrumb.component'
import VoucherDetailsCardComponent from '../components/VoucherDetailsCard.component'

const VoucherDetailsPage = () => {
  return (
    <ContainerComponent>
      <BreadcrumbComponent
        currentPage={"Voucher Details"}
        links={[{ title: "Voucher Module", path: "/voucher" }]}
      />
      <VoucherDetailsCardComponent />
    </ContainerComponent>
  )
}

export default VoucherDetailsPage
