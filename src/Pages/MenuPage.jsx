import React from 'react'
import Navbar from "../Components/Navbar"
import {useEffect, useState} from 'react';

const MenuPage = () => {
const [data, setData] = useState("");

  const URL = 'https://api.sampleapis.com/wines/rose'

  console.log('hello')

  const getData = async () => {
    const resp = await fetch(URL);
    const json = await resp.json();
    setData(json);
    console.log(data)
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
    <div className='text-white flex items-center justify-center'>
      <h1 className='font-bold'>Menu</h1>
     
    </div>
    </>
  )
}

export default MenuPage