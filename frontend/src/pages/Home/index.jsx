import React from 'react'
import { Outlet } from "react-router-dom"

// components
import Sidebar from './Sidebar'


const Home = () => {
  return (
    <div className='flex'>
      {/* <Sidebar/> */}
      <Outlet/>
    </div>
  )
}

export default Home 