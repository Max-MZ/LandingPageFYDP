import React from 'react'
import Logo from './assets/logo.svg'
function Analytics() {
  return (
    <div className = 'w-full bg-white py=16 px-4 h-screen'>
        <div className = 'max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={Logo} alt='/'></img>
            <div className='p-24'>
                <p className='text-[#009dfa] font-bold'>See Everything</p>
                <h1 className='font-bold text-xl'>Easy-to-read, intuitive diagrams</h1>
                <p>With the diagrams provided by us, you'll be able to make sense of even the most complex systems. Providing support 
                  for both Javascript and Python ecosystems as well as microservice support, you will be able to make connections 
                  that are not apparent to the naked eye.
                </p>
            </div>
        </div>

    </div>
  )
}

export default Analytics