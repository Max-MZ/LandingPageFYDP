import React from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
const Navbar = (showOptional) => {

  const [nav, setNav] = useState(false);
  const [show, setShow] = useState(showOptional)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className=' flex justify-left items-center h-24 max-w-[1240px] mx-auto text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a] ml-[50px]'>Code Visualization</h1>
      {/* <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4 hover ease-in-out duration-500' onClick={() => setShow(!show)}>Contact</li>
        <div className={show ? 'hover ease-in-out duration-1000 fixed right-0' : 'fixed right-[100%]'}>
          <li className = {'p-4 hover '} >Hehe</li>
        </div>



      </ul> */}
      <div onClick={handleNav} className='block md:hidden' >
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}

      </div>

      {/* <div className={!nav ? 'fixed left-[-100%] w-[60%] border-r border-r-gray-900 bg-[#00300]' : 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#00300] ease-in-out duration-500'}>
        <ul className='pt-24 uppercase'>
          <li className='p-4 border-b'>Home</li>
          <li className='p-4 border-b'>Company</li>
          <li className='p-4 border-b'>Resources</li>
          <li className='p-4 border-b'>About</li>
          <li className='p-4'>Contact</li>


        </ul>
      </div> */}


    </div>
  )
}

export default Navbar