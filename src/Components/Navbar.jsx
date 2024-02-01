import React, { useState } from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import {Link, useNavigate} from "react-router-dom"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  
  const navigate = useNavigate();


  const handleNav = () => {
    setNav(!nav)
  }

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');

    navigate('/');
  }

  return (
    <div className='flex justify-between items-center max-w-[1350px] mx-auto text-white'>
      <Link to="/home">
      <h1 className='w-full text-3xl font-bold text-[#dfa000] mt-8 cursor-pointer'>RES.SERVE</h1>
      </Link>
      <ul className='flex w-full h-full items-center mr-24 justify-center mt-6'>
        <Link to="/menu">
        <li className='p-8 font-bold'>Menu</li>
        </Link>
        <Link to="/booking">
        <li className='p-8 font-bold'>Book a Table</li>
        </Link>
        <Link to="/reservation">
        <li className='p-8 font-bold'>Reservations</li>
        </Link>
      </ul>
      <div className='mt-8 cursor-pointer'>
        <button onClick={handleLogout}>
        <LogoutIcon />
        </button>
      </div>
    </div>
  )
}

export default Navbar