import Link from "next/link";
import React from "react";

const Gallery = () => {
  return (
    <div className="max-w-6xl mx-auto px-5 md:px-10 mt-12 mb-8">
      <div className="grid lg:grid-cols-2 gap-2">
        <div className="relative">
          <img
            alt="gallery"
            className="object-cover object-center w-full"
            src="https://source.unsplash.com/500x330?sig=15"
          />
          <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 z-1 text-white w-5/6 h-5/6 p-8 hover:border hover:border-gray-300 hover:cursor-pointer transition-all duration-300">
            <h2 className="text-xl md:text-3xl font-extrabold uppercase relative">
              assorted boxes
            </h2>
            <p className="tracking-wider mb-16">20 Storages</p>
            <Link href="#" className="bg-transparent border border-white rounded-md hover:bg-white hover:text-black px-5 py-2 text-sm uppercase duration-300">
              View More
            </Link>
          </div>
        </div>
        <div className="relative">
          <img
            alt="gallery"
            className="object-cover object-center w-full"
            src="https://source.unsplash.com/500x330?sig=16"
          />
          <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 z-1 text-white w-5/6 h-5/6 p-8 hover:border hover:border-gray-300 hover:cursor-pointer transition-all duration-300">
            <h2 className="text-xl md:text-3xl font-extrabold uppercase relative">
              Sporting Goods
            </h2>
            <p className="tracking-wider mb-16">30 Storages</p>
            <Link href="#" className="bg-transparent border border-white rounded-md hover:bg-white hover:text-black px-5 py-2 text-sm uppercase duration-300">
              View More
            </Link>
          </div>
        </div>
        <div className="relative">
          <img
            alt="gallery"
            className="object-cover object-center w-full"
            src="https://source.unsplash.com/500x330?sig=17"
          />
          <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 z-1 text-white w-5/6 h-5/6 p-8 hover:border hover:border-gray-300 hover:cursor-pointer transition-all duration-300">
            <h2 className="text-xl md:text-3xl font-extrabold uppercase relative">
              household goods
            </h2>
            <p className="tracking-wider mb-16">13 Storages</p>
            <Link href="#" className="bg-transparent border border-white rounded-md hover:bg-white hover:text-black px-5 py-2 text-sm uppercase duration-300">
              View More
            </Link>
          </div>
        </div>
        <div className="relative">
          <img
            alt="gallery"
            className="object-cover object-center w-full"
            src="https://source.unsplash.com/500x330?sig=18"
          />
          <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 z-1 text-white w-5/6 h-5/6 p-8 hover:border hover:border-gray-300 hover:cursor-pointer transition-all duration-300">
            <h2 className="text-xl md:text-3xl font-extrabold uppercase relative">
              Tools workshop
            </h2>
            <p className="tracking-wider mb-16">11 Storages</p>
            <Link href="#" className="bg-transparent border border-white rounded-md hover:bg-white hover:text-black px-5 py-2 text-sm uppercase duration-300">
              View More
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Gallery;
