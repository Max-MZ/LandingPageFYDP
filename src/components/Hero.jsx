import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import Particles from "react-tsparticles";
import ParticleConfig from './particleConfig';
import { loadFull } from "tsparticles";
import Typed from 'react-typed'
const Hero = () => {

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
    <div className='text-white'>
      <ParticleConfig />
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>

        
        <p className='text-[#00df9a] font-bold p-2'>VISUALIZATIONS OF YOUR CODEBASE AT YOUR FINGERTIPS</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Accelerate your innovation.</h1>
        <div className='flex flex-row mx-auto'>
          <p >Map out your thoughts with </p>
          <Typed className='pl-1' strings={['python visualization', 'instant integration', 'javascript visualization', 'microservice architectures']} loop typeSpeed={12} backDelay={1000}></Typed>
        </div>
        {/* <div>
          <ParticleConfig/>
        </div> */}
        <p className='text-gray-500 font-bold p-2'> </p>
        {/* <Link to='/' className='bg-[#00df9a]  rounded-md font-medium mx-auto my-6 p-2 text-black ease-in-out'>Click me plz</Link> */}
      </div>
    </div>

  )
}

export default Hero