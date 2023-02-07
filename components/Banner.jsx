import React from "react";
import banner from "../public/assets/shoe6.jpg";
import Image from "next/image";
import Navbar from "./Navbar";

const Banner = () => {
  return (
    <div className="relative h-screen -z-1">
     <div>
        <Image
        className="brightness-50 -z-50"
        layout="fill"
        objectFit="cover"
        // style={{objectFit:"cover"}}
        src={banner}
        alt="Banner" />
     </div>
        <Navbar/>
      <div className="absolute top-1/2 max-w-6xl w-full px-5 md:px-10 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-10 ">
        <h2 className="py-2 text-center text-3xl md:text-6xl font-extrabold leading-10 tracking-normal">
          Best Place for Unfinished Games
        </h2>
        <p className="text-center py-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
          corporis in error?
        </p>
        <div className="text-center">
          <button className="relative text-white bg-transparent  border-2 border-[#009688] hover:border-none focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-16 py-3 text-center mr-2 mb-2
             before:absolute before:rounded-full  before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[#009688] before:transition-transform before:duration-1000 hover:text-white before:hover:scale-x-100 overflow-hidden">
            Sign Up
          </button>
          <button className="relative text-white bg-transparent  border-2 border-[#009688] hover:border-none focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-16 py-3 text-center mr-2 mb-2
             before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[#009688] before:transition-transform before:duration-1000 before:rounded-full hover:text-white before:hover:scale-x-100 overflow-hidden">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;