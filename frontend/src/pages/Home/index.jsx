import React from 'react'
import { Outlet } from "react-router-dom"

// components



const Home = () => {
  return (
    <div className='flex Container'>

      <Outlet/>
    </div>
  )
}

export default Home 