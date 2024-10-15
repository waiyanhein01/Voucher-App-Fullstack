import React from 'react'
import HeaderComponent from './Header.component'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

const LayoutComponent = () => {
  return (
    <main className=' flex flex-col min-h-screen p-5'>
      <HeaderComponent/>
      <Outlet/>
      <Toaster  position="top-right"/>
    </main>
  )
}

export default LayoutComponent
