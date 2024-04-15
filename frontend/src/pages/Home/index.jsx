import React from 'react'
import { Outlet } from "react-router-dom"
import Board from './Board'

// components
import Sidebar from './Sidebar'


const Home = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      {/* <Board/> */}
      <Outlet/>
    </div>
  )
}

export default Home 