import React from 'react'
import BreadcrumbComponent from '../components/Breadcrumb.component'
import ContainerComponent from '../components/Container.component'

const ChangeUserNamePage = () => {
  return (
    <ContainerComponent>
      <BreadcrumbComponent currentPage={"Change Username"}/>
    </ContainerComponent>
  )
}

export default ChangeUserNamePage
