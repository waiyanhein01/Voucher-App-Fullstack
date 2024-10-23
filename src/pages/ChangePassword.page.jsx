import React from 'react'
import BreadcrumbComponent from '../components/Breadcrumb.component'
import ContainerComponent from '../components/Container.component'

const ProfilePage = () => {
  return (
    <ContainerComponent>
      <BreadcrumbComponent currentPage={"Change Password"}/>
    </ContainerComponent>
  )
}

export default ProfilePage
