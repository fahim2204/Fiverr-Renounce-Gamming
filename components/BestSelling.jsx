import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Image from "next/image";
import { AiTwotoneStar } from "react-icons/ai";
import slider from "../public/assets/shoe1.jpg";
import slider2 from "../public/assets/shoe2.jpg";
import slider3 from "../public/assets/shoe3.jpg";
import slider4 from "../public/assets/shoe4.jpg";
import slider5 from "../public/assets/shoe5.jpg";
const BestSelling = () => {
  return (
    <div className="max-w-6xl px-5 md:px-10 mx-auto">
      <div className="mb-8 mt-12">
        <h3 className="text-4xl text-center uppercase font-bold">BEST SELLING</h3>
      </div>
      <Swiper
        breakpoints={{
          300: {
            slidesPerView: 2,
          },
          600: {
            slidesPerView: 3,
          },
          800: {
            slidesPerView: 4,
          },
          1100: {
            slidesPerView: 5,
          },
        }}
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <a className="relative block w-full group" href="#">
              <Image src={slider} alt=".." className="absolute block w-full h-full mt-5" />
              <div className="relative p-5">
                <div className="mt-40 mb-5">
                  <div className="transition-all transform  translate-y-8 opacity-0  group-hover:opacity-100  group-hover:translate-y-0 ">
                    <div className="p-2 justify-center items-center text-center">
                      <button className="px-10 md:px-5 lg:px-10  py-2 text-sm  bg-white  hover:bg-red-400 transition duration-1000 hover:text-white ">
                        Add to wishlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <div class="mt-10">
              <h2 className="text-2xl uppercase font-bold ">Brand</h2>
              <p className="text-md text-gray-600">A Short Line About The Cloth..</p>
              <p className="text-xl font-bold">$20</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <a className="relative block w-full group" href="##">
              <Image src={slider} alt=".." className=" absolute block w-full h-full mt-5" />
              <div className="relative p-5">
                <div className="mt-40 mb-5">
                  <div className="transition-all transform  translate-y-8 opacity-0  group-hover:opacity-100  group-hover:translate-y-0 ">
                    <div className="p-2 justify-center items-center text-center">
                      <button className="px-10 md:px-5 lg:px-10  py-2 text-sm  bg-white  hover:bg-red-400 transition duration-1000 hover:text-white ">
                        Add to wishlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <div class="mt-10">
              <h2 className="text-2xl uppercase font-bold ">Brand</h2>
              <p className="text-md text-gray-600">A Short Line About The Cloth..</p>
              <p className="text-xl font-bold">$20</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <a className="relative block w-full group" href="##">
              <Image src={slider} alt=".." className=" absolute block w-full h-full mt-5" />
              <div className="relative p-5">
                <div className="mt-40 mb-5">
                  <div className="transition-all transform  translate-y-8 opacity-0  group-hover:opacity-100  group-hover:translate-y-0 ">
                    <div className="p-2 justify-center items-center text-center">
                      <button className="px-10 md:px-5 lg:px-10  py-2 text-sm  bg-white  hover:bg-red-400 transition duration-1000 hover:text-white ">
                        Add to wishlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <div class="mt-10">
              <h2 className="text-2xl uppercase font-bold ">Brand</h2>
              <p className="text-md text-gray-600">A Short Line About The Cloth..</p>
              <p className="text-xl font-bold">$20</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <a className="relative block w-full group" href="##">
              <Image src={slider} alt=".." className=" absolute block w-full h-full mt-5" />
              <div className="relative p-5">
                <div className="mt-40 mb-5">
                  <div className="transition-all transform  translate-y-8 opacity-0  group-hover:opacity-100  group-hover:translate-y-0 ">
                    <div className="p-2 justify-center items-center text-center">
                      <button className="px-10 md:px-5 lg:px-10  py-2 text-sm  bg-white  hover:bg-red-400 transition duration-1000 hover:text-white ">
                        Add to wishlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <div class="mt-10">
              <h2 className="text-2xl uppercase font-bold ">Brand</h2>
              <p className="text-md text-gray-600">A Short Line About The Cloth..</p>
              <p className="text-xl font-bold">$20</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <a className="relative block w-full group" href="##">
              <Image src={slider} alt=".." className=" absolute block w-full h-full mt-5" />
              <div className="relative p-5">
                <div className="mt-40 mb-5">
                  <div className="transition-all transform  translate-y-8 opacity-0  group-hover:opacity-100  group-hover:translate-y-0 ">
                    <div className="p-2 justify-center items-center text-center">
                      <button className="px-10 md:px-5 lg:px-10  py-2 text-sm  bg-white  hover:bg-red-400 transition duration-1000 hover:text-white ">
                        Add to wishlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <div class="mt-10">
              <h2 className="text-2xl uppercase font-bold ">Brand</h2>
              <p className="text-md text-gray-600">A Short Line About The Cloth..</p>
              <p className="text-xl font-bold">$20</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <a className="relative block w-full group" href="##">
              <Image src={slider} alt=".." className=" absolute block w-full h-full mt-5" />
              <div className="relative p-5">
                <div className="mt-40 mb-5">
                  <div className="transition-all transform  translate-y-8 opacity-0  group-hover:opacity-100  group-hover:translate-y-0 ">
                    <div className="p-2 justify-center items-center text-center">
                      <button className="px-10 md:px-5 lg:px-10  py-2 text-sm  bg-white  hover:bg-red-400 transition duration-1000 hover:text-white ">
                        Add to wishlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <div class="mt-10">
              <h2 className="text-2xl uppercase font-bold ">Brand</h2>
              <p className="text-md text-gray-600">A Short Line About The Cloth..</p>
              <p className="text-xl font-bold">$20</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <a className="relative block w-full group" href="##">
              <Image src={slider} alt=".." className=" absolute block w-full h-full mt-5" />
              <div className="relative p-5">
                <div className="mt-40 mb-5">
                  <div className="transition-all transform  translate-y-8 opacity-0  group-hover:opacity-100  group-hover:translate-y-0 ">
                    <div className="p-2 justify-center items-center text-center">
                      <button className="px-10 md:px-5 lg:px-10  py-2 text-sm  bg-white  hover:bg-red-400 transition duration-1000 hover:text-white ">
                        Add to wishlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <div class="mt-10">
              <h2 className="text-2xl uppercase font-bold ">Brand</h2>
              <p className="text-md text-gray-600">A Short Line About The Cloth..</p>
              <p className="text-xl font-bold">$20</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <a className="relative block w-full group" href="##">
              <Image src={slider} alt=".." className=" absolute block w-full h-full mt-5" />
              <div className="relative p-5">
                <div className="mt-40 mb-5">
                  <div className="transition-all transform  translate-y-8 opacity-0  group-hover:opacity-100  group-hover:translate-y-0 ">
                    <div className="p-2 justify-center items-center text-center">
                      <button className="px-10 md:px-5 lg:px-10  py-2 text-sm  bg-white  hover:bg-red-400 transition duration-1000 hover:text-white ">
                        Add to wishlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <div class="mt-10">
              <h2 className="text-2xl uppercase font-bold ">Brand</h2>
              <p className="text-md text-gray-600">A Short Line About The Cloth..</p>
              <p className="text-xl font-bold">$20</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <a className="relative block w-full group" href="##">
              <Image src={slider} alt=".." className=" absolute block w-full h-full mt-5" />
              <div className="relative p-5">
                <div className="mt-40 mb-5">
                  <div className="transition-all transform  translate-y-8 opacity-0  group-hover:opacity-100  group-hover:translate-y-0 ">
                    <div className="p-2 justify-center items-center text-center">
                      <button className="px-10 md:px-5 lg:px-10  py-2 text-sm  bg-white  hover:bg-red-400 transition duration-1000 hover:text-white ">
                        Add to wishlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <div class="mt-10">
              <h2 className="text-2xl uppercase font-bold ">Brand</h2>
              <p className="text-md text-gray-600">A Short Line About The Cloth..</p>
              <p className="text-xl font-bold">$20</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BestSelling;
