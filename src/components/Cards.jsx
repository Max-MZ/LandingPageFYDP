import React from "react";
import logo from "./assets/logo.svg";
const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid grid-cols-3 gap-8">
      <div className="w-full my-5 border text-center shadow-xl flex flex-col rounded-md hover:scale-105 duration-500">
          <img
            src={logo}
            className="w-20 mx-auto text-center mt-[-3rem]"
            alt="/"
          ></img>
          <h2>Single User</h2>
          <p className="font-bold text-3xl">$100</p>
          <div>
            <p className="py-2 border-b ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="py-2 border-b ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="py-2 border-b ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <button className="my-5">Start here</button>
        </div>
        <div className="w-full border my-0 text-center bg-gray-100 shadow-xl flex flex-col rounded-md hover:scale-105 duration-500">
          <img
            src={logo}
            className="w-20 mx-auto text-center mt-[-3rem]"
            alt="/"
          ></img>
          <h2>Team Package</h2>
          <p className="font-bold text-3xl">$100</p>
          <div>
            <p className="py-2 border-b ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="py-2 border-b ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="py-2 border-b ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <button className=" bg-black  font-bold mx-auto  px-10 rounded-md py-3 text-white">Start here</button>
        </div>
        <div className="w-full my-5 border text-center shadow-xl flex flex-col rounded-md hover:scale-105 duration-500">
          <img
            src={logo}
            className="w-20 mx-auto text-center mt-[-3rem]"
            alt="/"
          ></img>
          <h2>Up to 3 Users</h2>
          <p className="font-bold text-3xl">$100</p>
          <div>
            <p className="py-2 border-b ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="py-2 border-b ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="py-2 border-b ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <button className="font-bold my-5 mx-auto  px-10 rounded-md py-3 bg-[#00df9a]">Start here</button>
        </div>
        
      </div>
    </div>
  );
};

// const Cards = () => {
//     return (
//       <div className='w-full py-[10rem] px-4 bg-white'>
//         <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
//             <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
//                 <img className='w-20 mx-auto mt-[-3rem] bg-white' src={logo} alt="/" />
//                 <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
//                 <p className='text-center text-4xl font-bold'>$149</p>
//                 <div className='text-center font-medium'>
//                     <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
//                     <p className='py-2 border-b mx-8'>1 Granted User</p>
//                     <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
//                 </div>
//                 <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
//             </div>
//             <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
//                 <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={logo} alt="/" />
//                 <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
//                 <p className='text-center text-4xl font-bold'>$149</p>
//                 <div className='text-center font-medium'>
//                     <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
//                     <p className='py-2 border-b mx-8'>1 Granted User</p>
//                     <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
//                 </div>
//                 <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
//             </div>
//             <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
//                 <img className='w-20 mx-auto mt-[-3rem] bg-white' src={logo} alt="/" />
//                 <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
//                 <p className='text-center text-4xl font-bold'>$149</p>
//                 <div className='text-center font-medium'>
//                     <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
//                     <p className='py-2 border-b mx-8'>1 Granted User</p>
//                     <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
//                 </div>
//                 <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
//             </div>
//         </div>
//       </div>
//     );
//   };
export default Cards;
