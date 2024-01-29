import React, { useState } from 'react'
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex justify-between items-center h-26 max-w-[1240px] mx-auto  text-white'>
      <h1 className='w-full text-3xl font-bold text-[#dfa000] mt-8'>RES.SERVE</h1>
      <ul className='flex w-full h-full items-center mr-[270px] mt-8'>
        <li className='p-6 '>Menu</li>
        <li className='p-6 '>Book a Table</li>
        <li className='p-6 '>Reservations</li>
      </ul>
      <div className='mt-8 pl-8 cursor-pointer'>
        <LogoutIcon />
      </div>
    </div>
  )
}

export default Navbar