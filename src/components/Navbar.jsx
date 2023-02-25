import React from 'react'
const Navbar = () => {
  return (
    <div className=' flex justify-left items-center h-24 max-w-[1240px] mx-auto text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a] ml-[50px]'>Code Visualization</h1>
      <a href='https://cv-frontend-vert.vercel.app/dashboard'>
        <button  className="font-medium rounded-lg  bg-[#00faaf] text-black py-3 px-5">Dashboard</button>
      </a>
    </div>
  )
}

export default Navbar