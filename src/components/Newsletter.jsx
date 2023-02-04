import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-black text-white">
      <div className="grid-cols-3 justify-center mx-auto  w-full py-16 px-40">
        <div className="mx-auto col-span-2">
          <h1 className="font-bold text-4xl pb-2">
            Want to hear about new developments?
          </h1>
          <p className=" text-xl pb-2">
            Sign up to get a Newsletter.
          </p>
        </div>

        <div className="m-4">
          <div className="flex flex-col items-center justify-between w-full md:flex-row">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="m-5 font-medium w-[200px] rounded-lg  bg-[#00faaf] text-black py-3 ">
              Notify Me
            </button>

          </div>
        </div>

        <p className=" text-s pb-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ullam, sapiente expedita accusantium ratione ducimus quasi aut corrupti sunt aliquam.
          </p>




      </div>
    </div>
  );
};

export default Newsletter;
