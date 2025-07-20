'use client';
import React, { useState } from 'react'

const Generate = () => {

  const genratingType = ['advice', 'quote', 'joke'];

  const [currentType, setCurrentType] = useState('advice');

  // console.log("🚀 ~ Generate ~ user:", user)
  // const [userData, setUserData] = useState(null);
  // console.log("🚀 ~ Generate ~ userData:", userData)

  // useEffect(() => {
  //   if (user) {
  //     import('axios').then(({ default: axios }) => {
  //       axios.post('http://localhost:5000/api',{user} ,{
  //         headers: { Authorization: `Bearer ${user.id}` },
  //       })
  //       .then((res) => {
  //         console.log("🚀 ~ useEffect ~ res:", res);
  //         setUserData(res.data.user);
  //       });
  //     });
  //   }
  // }, [user]);

  return (
    <div className="lg:w-1/2 w-full mx-3 flex flex-col gap-3 items-center bg-gray-300 rounded-xl py-2">
      <div>
        {genratingType.map((type, index) => (
          <button title={type} key={index} className={`${currentType == type ? 'bg-blue-400' : ''} p-2 rounded-xl inline-flex items-center mr-4 transition-colors duration-300 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500`} onClick={() => setCurrentType(type)}>
            <span className="ml-2 capitalize">{type}</span>
          </button>
        ))}
      </div>
    {/* <input
      type="text"
      placeholder="Search..."
      className="w-full border border-gray-300 shadow-md rounded-t-2xl px-4 py-2 focus:outline-none focus:none"
    /> */}
    <button
      type="submit"
      className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Get {currentType.charAt(0).toUpperCase() + currentType.slice(1)}
    </button>
  </div>
  )
}

export default Generate
