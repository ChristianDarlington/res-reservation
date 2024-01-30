import React, { useState } from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex justify-between items-center h-26 max-w-[1240px] mx-auto  text-white'>
      <h1 className='w-full text-3xl font-bold text-[#dfa000] mt-8 cursor-pointer'>RES.SERVE</h1>
      <ul className='flex w-full h-full items-center mr-[270px] mt-8'>
        <Link to="/menu">
        <li className='p-6 '>Menu</li>
        </Link>
        <Link to="/booking">
        <li className='p-6 '>Book a Table</li>
        </Link>
        <Link to="/reservation">
        <li className='p-6 '>Reservations</li>
        </Link>
      </ul>
      <div className='mt-8 pl-8 cursor-pointer'>
        <LogoutIcon />
      </div>
    </div>
  )
}

export default Navbar