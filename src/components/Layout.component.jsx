import React, { useEffect } from 'react'
import HeaderComponent from './Header.component'
import { Navigate, Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import useCookie from 'react-use-cookie'
import useProfileStore from '../store/useProfileStore'

const LayoutComponent = () => {
  const [userToken,setUserToken] = useCookie("my_token")
  const [profileToken,setProfileToken] = useCookie("my_profile")

  const {setUser} = useProfileStore()

  useEffect(() => {
    if(profileToken){
      setUser(JSON.parse(profileToken))
    }
  }, [])
  
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
