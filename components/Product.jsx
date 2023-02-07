import Image from "next/image";
import React from "react";
import product1 from "../public/assets/product1.jpg";
import product2 from "../public/assets/product2.jpg";
import { AiFillPrinter, AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
const Product = () => {
  return (
    <div className="max-w-6xl px-5 md:px-10 mx-auto">
      <div className="grid md:grid-cols-3 gap-8 py-5 2xl:mt-32">
        <div className="relative">
          <img
            alt="gallery"
            className="w-full h-full object-cover object-center"
            src="https://ibid.modeltheme.com/self-storage-auctions/wp-content/uploads/2021/03/Storage-Category2.jpg"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="top-1/4 text-center mx-auto ">
              <h2 className="text-xl md:text-3xl font-bold text-white uppercase">HouseHold</h2>
              <p className="tracking-wider text-gray-300">13 Storages</p>
              <button className="bg-transparent text-white border border-white rounded-md hover:bg-white hover:text-black mx-auto px-5 py-2 md:mt-14 mt-6 mb-14 md:mb-28 text-sm uppercase duration-300">
                View All Items
              </button>
            </div>
          </div>
        </div>
        {/* span-2 */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-1 md:grid-rows-2 md:gap-6">
          <div className="bg-white shadow shadow-gray-400 p-2 w-full flex flex-col md:flex-row md:items-center justify-center">
            <div className="w-full mx-auto mr-2">
              <Image src={product1} width={150} height={150} alt=".." className="hover:scale-105 mx-auto" />
            </div>
            <div className="w-full text-sm pt-2">
              <p className="text-lg font-bold">LockBox Storage Midtown LockBox Storage Midtown</p>
              <h3>$89.00</h3>
              <div className="flex space-x-3 pt-1 px-2">
                <span className="p-2 rounded-md shadow-md shadow-gray-400 hover:bg-gray-300  bg-black">
                  <Link href="#" className="">
                    <AiFillPrinter className="text-2xl text-white" />
                  </Link>
                </span>
                <span className="p-2 rounded-md shadow-md shadow-gray-400 hover:bg-gray-300 ">
                  <Link href="#" className="">
                    <AiOutlineHeart className="text-2xl" />
                  </Link>
                </span>
                <span className="p-2 rounded-md shadow-md shadow-gray-400 hover:bg-gray-300 ">
                  <Link href="#" className="">
                    <AiOutlineSearch className="text-2xl" />
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white shadow shadow-gray-400 p-2 w-full flex flex-col md:flex-row md:items-center justify-center">
            <div className="w-full mx-auto mr-2">
              <Image src={product1} width={150} height={150} alt=".." className="hover:scale-105 mx-auto" />
            </div>
            <div className="w-full text-sm pt-2">
              <p className="text-lg font-bold">LockBox Storage Midtown LockBox Storage Midtown</p>
              <h3>$89.00</h3>
              <div className="flex space-x-3 pt-1 px-2">
                <span className="p-2 rounded-md shadow-md shadow-gray-400 hover:bg-gray-300  bg-black">
                  <Link href="#" className="">
                    <AiFillPrinter className="text-2xl text-white" />
                  </Link>
                </span>
                <span className="p-2 rounded-md shadow-md shadow-gray-400 hover:bg-gray-300 ">
                  <Link href="#" className="">
                    <AiOutlineHeart className="text-2xl" />
                  </Link>
                </span>
                <span className="p-2 rounded-md shadow-md shadow-gray-400 hover:bg-gray-300 ">
                  <Link href="#" className="">
                    <AiOutlineSearch className="text-2xl" />
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-1 md:grid-rows-2 md:gap-6">
          <div className="bg-white shadow shadow-gray-400 p-2 w-full flex flex-col md:flex-row md:items-center justify-center">
            <div className="w-full mx-auto mr-2">
              <Image src={product1} width={150} height={150} alt=".." className="hover:scale-105 mx-auto" />
            </div>
            <div className="w-full text-sm pt-2">
              <p className="text-lg font-bold">LockBox Storage Midtown LockBox Storage Midtown</p>
              <h3>$89.00</h3>
              <div className="flex space-x-3 pt-1 px-2">
                <span className="p-2 rounded-md shadow-md shadow-gray-400 hover:bg-gray-300  bg-black">
                  <Link href="#" className="">
                    <AiFillPrinter className="text-2xl text-white" />
                  </Link>
                </span>
                <span className="p-2 rounded-md shadow-md shadow-gray-400 hover:bg-gray-300 ">
                  <Link href="#" className="">
                    <AiOutlineHeart className="text-2xl" />
                  </Link>
                </span>
                <span className="p-2 rounded-md shadow-md shadow-gray-400 hover:bg-gray-300 ">
                  <Link href="#" className="">
                    <AiOutlineSearch className="text-2xl" />
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white shadow shadow-gray-400 p-2 w-full flex flex-col md:flex-row md:items-center justify-center">
            <div className="w-full mx-auto mr-2">
              <Image src={product1} width={150} height={150} alt=".." className="hover:scale-105 mx-auto" />
            </div>
            <div className="w-full text-sm pt-2">
              <p className="text-lg font-bold">LockBox Storage Midtown LockBox Storage Midtown</p>
              <h3>$89.00</h3>
              <div className="flex space-x-3 pt-1 px-2">
                <span className="p-2 rounded-md shadow-md shadow-gray-400 hover:bg-gray-300  bg-black">
                  <Link href="#" className="">
                    <AiFillPrinter className="text-2xl text-white" />
                  </Link>
                </span>
                <span className="p-2 rounded-md shadow-md shadow-gray-400 hover:bg-gray-300 ">
                  <Link href="#" className="">
                    <AiOutlineHeart className="text-2xl" />
                  </Link>
                </span>
                <span className="p-2 rounded-md shadow-md shadow-gray-400 hover:bg-gray-300 ">
                  <Link href="#" className="">
                    <AiOutlineSearch className="text-2xl" />
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
       
      </div>
      <div className="grid md:grid-cols-3 gap-8 py-5 2xl:mt-32">
        <div className="relative">
          <img
            alt="gallery"
            className="w-full h-full object-cover object-center"
            src="https://ibid.modeltheme.com/self-storage-auctions/wp-content/uploads/2021/03/Storage-Category1.jpg)"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="top-1/4 text-center mx-auto ">
              <h2 className="text-xl md:text-3xl font-bold text-white uppercase">Boxes</h2>
              <p className="tracking-wider text-gray-300">13 Storages</p>
              <button className="bg-transparent text-white border border-white rounded-md hover:bg-white hover:text-black mx-auto px-5 py-2 md:mt-14 mt-6 mb-14 md:mb-28 text-sm uppercase duration-300">
                View All Items
              </button>
            </div>
          </div>
        </div>
        {/* span-2 */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-1 md:grid-rows-2 md:gap-6">
          <div className="bg-white shadow shadow-gray-400 p-2 w-full flex flex-col md:flex-row md:items-center justify-center">
            <div className="w-full mx-auto mr-2">
              <Image src={product1} width={150} height={150} alt=".." className="hover:scale-105 mx-auto" />
            </div>
            <div className="w-full text-sm pt-2">
              <p className="text-lg font-bold">LockBox Storage Midtown LockBox Storage Midtown</p>
              <h3>$89.00</h3>
              <div className="flex space-x-3 pt-1 px-2">
                <span className="p-2 rounded-md shadow-md shadow-gray-400 hover:bg-gray-300  bg-black">
                  <Link href="#" className="">
                    <AiFillPrinter className="text-2xl text-white" />
                  </Link>
                </span>
                <span className="p-2 rounded-md shadow-md shadow-gray-400 hover:bg-gray-300 ">
                  <Link href="#" className="">
                    <AiOutlineHeart className="text-2xl" />
                  </Link>
                </span>
                <span className="p-2 rounded-md shadow-md shadow-gray-400 hover:bg-gray-300 ">
                  <Link href="#" className="">
                    <AiOutlineSearch className="text-2xl" />
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white shadow shadow-gray-400 p-2 w-full flex flex-col md:flex-row md:items-center justify-center">
            <div className="w-full mx-auto mr-2">
              <Image src={product1} width={150} height={150} alt=".." className="hover:scale-105 mx-auto" />
            </div>
            <div className="w-full text-sm pt-2">
              <p className="text-lg font-bold">LockBox Storage Midtown LockBox Storage Midtown</p>
              <h3>$89.00</h3>
              <div className="flex space-x-3 pt-1 px-2">
                <span className="p-2 rounded-md shadow-md shadow-gray-400 hover:bg-gray-300  bg-black">
                  <Link href="#" className="">
                    <AiFillPrinter className="text-2xl text-white" />
                  </Link>
                </span>
                <span className="p-2 rounded-md shadow-md shadow-gray-400 hover:bg-gray-300 ">
                  <Link href="#" className="">
                    <AiOutlineHeart className="text-2xl" />
                  </Link>
                </span>
                <span className="p-2 rounded-md shadow-md shadow-gray-400 hover:bg-gray-300 ">
                  <Link href="#" className="">
                    <AiOutlineSearch className="text-2xl" />
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-1 md:grid-rows-2 md:gap-6">
          <div className="bg-white shadow shadow-gray-400 p-2 w-full flex flex-col md:flex-row md:items-center justify-center">
            <div className="w-full mx-auto mr-2">
              <Image src={product1} width={150} height={150} alt=".." className="hover:scale-105 mx-auto" />
            </div>
            <div className="w-full text-sm pt-2">
              <p className="text-lg font-bold">LockBox Storage Midtown LockBox Storage Midtown</p>
              <h3>$89.00</h3>
              <div className="flex space-x-3 pt-1 px-2">
                <span className="p-2 rounded-md shadow-md shadow-gray-400 hover:bg-gray-300  bg-black">
                  <Link href="#" className="">
                    <AiFillPrinter className="text-2xl text-white" />
                  </Link>
                </span>
                <span className="p-2 rounded-md shadow-md shadow-gray-400 hover:bg-gray-300 ">
                  <Link href="#" className="">
                    <AiOutlineHeart className="text-2xl" />
                  </Link>
                </span>
                <span className="p-2 rounded-md shadow-md shadow-gray-400 hover:bg-gray-300 ">
                  <Link href="#" className="">
                    <AiOutlineSearch className="text-2xl" />
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white shadow shadow-gray-400 p-2 w-full flex flex-col md:flex-row md:items-center justify-center">
            <div className="w-full mx-auto mr-2">
              <Image src={product1} width={150} height={150} alt=".." className="hover:scale-105 mx-auto" />
            </div>
            <div className="w-full text-sm pt-2">
              <p className="text-lg font-bold">LockBox Storage Midtown LockBox Storage Midtown</p>
              <h3>$89.00</h3>
              <div className="flex space-x-3 pt-1 px-2">
                <span className="p-2 rounded-md shadow-md shadow-gray-400 hover:bg-gray-300  bg-black">
                  <Link href="#" className="">
                    <AiFillPrinter className="text-2xl text-white" />
                  </Link>
                </span>
                <span className="p-2 rounded-md shadow-md shadow-gray-400 hover:bg-gray-300 ">
                  <Link href="#" className="">
                    <AiOutlineHeart className="text-2xl" />
                  </Link>
                </span>
                <span className="p-2 rounded-md shadow-md shadow-gray-400 hover:bg-gray-300 ">
                  <Link href="#" className="">
                    <AiOutlineSearch className="text-2xl" />
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
       
      </div>
      <div className="grid md:grid-cols-3 gap-8 py-5 2xl:mt-32">
        <div className="relative">
          <img
            alt="gallery"
            className="w-full h-full object-cover object-center"
            src="https://ibid.modeltheme.com/self-storage-auctions/wp-content/uploads/2021/03/Storage-Category2.jpg"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="top-1/4 text-center mx-auto ">
              <h2 className="text-xl md:text-3xl font-bold text-white uppercase">HouseHold</h2>
              <p className="tracking-wider text-gray-300">13 Storages</p>
              <button className="bg-transparent text-white border border-white rounded-md hover:bg-white hover:text-black mx-auto px-5 py-2 md:mt-14 mt-6 mb-14 md:mb-28 text-sm uppercase duration-300">
                View All Items
              </button>
            </div>
          </div>
        </div>
        {/* span-2 */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-1 md:grid-rows-2 md:gap-6">
          <div className="bg-white shadow shadow-gray-400 p-2 w-full flex flex-col md:flex-row md:items-center justify-center">
            <div className="w-full mx-auto mr-2">
              <Image src={product1} width={150} height={150} alt=".." className="hover:scale-105 mx-auto" />
            </div>
            <div className="w-full text-sm pt-2">
              <p className="text-lg font-bold">LockBox Storage Midtown LockBox Storage Midtown</p>
              <h3>$89.00</h3>
              <div className="flex space-x-3 pt-1 px-2">
                <span className="p-2 rounded-md shadow-md shadow-gray-400 hover:bg-gray-300  bg-black">
                  <Link href="#" className="">
                    <AiFillPrinter className="text-2xl text-white" />
                  </Link>
                </span>
                <span className="p-2 rounded-md shadow-md shadow-gray-400 hover:bg-gray-300 ">
                  <Link href="#" className="">
                    <AiOutlineHeart className="text-2xl" />
                  </Link>
                </span>
                <span className="p-2 rounded-md shadow-md shadow-gray-400 hover:bg-gray-300 ">
                  <Link href="#" className="">
                    <AiOutlineSearch className="text-2xl" />
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white shadow shadow-gray-400 p-2 w-full flex flex-col md:flex-row md:items-center justify-center">
            <div className="w-full mx-auto mr-2">
              <Image src={product1} width={150} height={150} alt=".." className="hover:scale-105 mx-auto" />
            </div>
            <div className="w-full text-sm pt-2">
              <p className="text-lg font-bold">LockBox Storage Midtown LockBox Storage Midtown</p>
              <h3>$89.00</h3>
              <div className="flex space-x-3 pt-1 px-2">
                <span className="p-2 rounded-md shadow-md shadow-gray-400 hover:bg-gray-300  bg-black">
                  <Link href="#" className="">
                    <AiFillPrinter className="text-2xl text-white" />
                  </Link>
                </span>
                <span className="p-2 rounded-md shadow-md shadow-gray-400 hover:bg-gray-300 ">
                  <Link href="#" className="">
                    <AiOutlineHeart className="text-2xl" />
                  </Link>
                </span>
                <span className="p-2 rounded-md shadow-md shadow-gray-400 hover:bg-gray-300 ">
                  <Link href="#" className="">
                    <AiOutlineSearch className="text-2xl" />
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-1 md:grid-rows-2 md:gap-6">
          <div className="bg-white shadow shadow-gray-400 p-2 w-full flex flex-col md:flex-row md:items-center justify-center">
            <div className="w-full mx-auto mr-2">
              <Image src={product1} width={150} height={150} alt=".." className="hover:scale-105 mx-auto" />
            </div>
            <div className="w-full text-sm pt-2">
              <p className="text-lg font-bold">LockBox Storage Midtown LockBox Storage Midtown</p>
              <h3>$89.00</h3>
              <div className="flex space-x-3 pt-1 px-2">
                <span className="p-2 rounded-md shadow-md shadow-gray-400 hover:bg-gray-300  bg-black">
                  <Link href="#" className="">
                    <AiFillPrinter className="text-2xl text-white" />
                  </Link>
                </span>
                <span className="p-2 rounded-md shadow-md shadow-gray-400 hover:bg-gray-300 ">
                  <Link href="#" className="">
                    <AiOutlineHeart className="text-2xl" />
                  </Link>
                </span>
                <span className="p-2 rounded-md shadow-md shadow-gray-400 hover:bg-gray-300 ">
                  <Link href="#" className="">
                    <AiOutlineSearch className="text-2xl" />
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white shadow shadow-gray-400 p-2 w-full flex flex-col md:flex-row md:items-center justify-center">
            <div className="w-full mx-auto mr-2">
              <Image src={product1} width={150} height={150} alt=".." className="hover:scale-105 mx-auto" />
            </div>
            <div className="w-full text-sm pt-2">
              <p className="text-lg font-bold">LockBox Storage Midtown LockBox Storage Midtown</p>
              <h3>$89.00</h3>
              <div className="flex space-x-3 pt-1 px-2">
                <span className="p-2 rounded-md shadow-md shadow-gray-400 hover:bg-gray-300  bg-black">
                  <Link href="#" className="">
                    <AiFillPrinter className="text-2xl text-white" />
                  </Link>
                </span>
                <span className="p-2 rounded-md shadow-md shadow-gray-400 hover:bg-gray-300 ">
                  <Link href="#" className="">
                    <AiOutlineHeart className="text-2xl" />
                  </Link>
                </span>
                <span className="p-2 rounded-md shadow-md shadow-gray-400 hover:bg-gray-300 ">
                  <Link href="#" className="">
                    <AiOutlineSearch className="text-2xl" />
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Product;
