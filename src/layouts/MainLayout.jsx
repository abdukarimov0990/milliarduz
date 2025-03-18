import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MainLayout = () => {
  
  return (
    <div className='flex flex-col min-h-screen body bg-[#131212] py-4'>
      <Header></Header>
      <main className='grow mt-[100px] '>
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  )
}

export default MainLayout
