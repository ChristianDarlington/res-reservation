import {useEffect, useState} from 'react';
import React from 'react'
import Navbar from "../Components/Navbar"


const MenuPage = () => {

  const [data, setData] = useState("");

  const URL = 'https://api.sampleapis.com/wines/rose'

  const getData = async () => {
    try {
      const resp = await fetch(URL);
      const json = await resp.json();
      setData(json);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    getData(); 
  }, []);

  useEffect(() => {
    console.log(data)
  }, []); // This effect runs whenever 'data' changes

  return (
    <>
      <Navbar />
      <div className=' text-white flex items-center justify-center'>
       
      {/* Check if items exist */}
      {data ? (
        <div>
          {/* Render items */}
          <ul>
            {data.map((item, index) => (
              <li key={index}>
                {/* Render each item, including an <img> tag */}
                <div className='font-bold'>
                  <p>{item.wine}</p> {/* Assuming item has a 'name' property */}
                  <img src={item.image} alt={item.name}/> {/* Assuming item has an 'imageUrl' property */}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No items to display</p>
      )}
    </div>
    </>
  )
}

export default MenuPage