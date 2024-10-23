import React from 'react'
import HeaderComponent from './Header.component'
import { Navigate, Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import useCookie from 'react-use-cookie'

const LayoutComponent = () => {
  const [userToken,setUserToken] = useCookie("my_token")
  if(!userToken){
    return <Navigate to="/"/> 
  }
  return (
    <main className=' flex flex-col min-h-screen p-5'>
      <HeaderComponent/>
      <Outlet/>
      <Toaster  position="top-right"/>
    </main>
  )
}

export default LayoutComponent
