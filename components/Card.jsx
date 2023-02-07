import React from "react";
import product1 from "../public/assets/product1.jpg";
import product2 from "../public/assets/product2.jpg";
import Image from "next/image";
const Card = () => {
  return (
    <div className="max-w-6xl px-5 md:px-10 mx-auto">
      <div className="flex mb-10 mt-12 flex-col items-center">
        <h3 className="text-4xl text-center uppercase font-bold  mb-2">LATEST AUCTIONS</h3>
        <svg
          width="515"
          height="25"
          viewBox="0 0 275 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="7" width="120" height="1" fill="#CCCCCC" />
          <rect x="155" y="7" width="120" height="1" fill="#CCCCCC" />
          <path
            d="M144.443 14.6458C144.207 14.8818 143.897 15 143.588 15C143.278 15 142.968 14.8818 142.732 14.6454L137.874 9.78689C137.517 9.43023 137.43 8.90654 137.612 8.46798L136.617 7.47264L135.242 8.84723C135.517 9.2862 135.458 9.8809 135.066 10.2714C134.614 10.7245 133.888 10.7342 133.448 10.2936L130.324 7.17126C129.883 6.73028 129.893 6.00566 130.347 5.55298C130.738 5.16122 131.332 5.10231 131.771 5.37788L135.378 1.77014C135.102 1.33158 135.161 0.737682 135.553 0.346326C136.006 -0.10676 136.73 -0.116443 137.171 0.324136L140.295 3.44732C140.736 3.8879 140.726 4.61251 140.272 5.0656C139.88 5.45736 139.287 5.51586 138.849 5.2407L137.472 6.6169L138.59 7.73449C138.945 7.69334 139.314 7.80348 139.586 8.07622L144.444 12.9347C144.916 13.4071 144.916 14.1729 144.443 14.6458Z"
            fill="#414144"
          />
        </svg>
      </div>
      <div className="justify-center items-center mt-5 mx-auto gap-16 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="h-full text-center mb-4 drop-shadow-xl bg-white border border-gray-200 text-gray-900  ">
          <div className="relative block w-full group">
            <Image src={product1} alt=".." className="" />
            <div className="absolute w-full bottom-2 right-1/2 transition-all transform translate-x-1/2 translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0">
              <button className="text-sm py-2 px-3 bg-white  hover:bg-red-400 transition duration-1000 hover:text-white ">
                Add to wishlist
              </button>
            </div>
          </div>
          <div class="mt-5">
            <h2 className="text-xl  font-bold ">Here Self Storage</h2>
            <p className="text-md text-gray-600">
              Starting Bid: <span className="text-md font-bold">$100</span>
            </p>
          </div>
        </div>
        <div className="h-full text-center mb-4 drop-shadow-xl bg-white border border-gray-200 text-gray-900  ">
          <div className="relative block w-full group">
            <Image src={product1} alt=".." className="" />
            <div className="absolute w-full bottom-2 right-1/2 transition-all transform translate-x-1/2 translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0">
              <button className="text-sm py-2 px-3 bg-white  hover:bg-red-400 transition duration-1000 hover:text-white ">
                Add to wishlist
              </button>
            </div>
          </div>
          <div class="mt-5">
            <h2 className="text-xl  font-bold ">Here Self Storage</h2>
            <p className="text-md text-gray-600">
              Starting Bid: <span className="text-md font-bold">$100</span>
            </p>
          </div>
        </div>
        <div className="h-full text-center mb-4 drop-shadow-xl bg-white border border-gray-200 text-gray-900  ">
          <div className="relative block w-full group">
            <Image src={product1} alt=".." className="" />
            <div className="absolute w-full bottom-2 right-1/2 transition-all transform translate-x-1/2 translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0">
              <button className="text-sm py-2 px-3 bg-white  hover:bg-red-400 transition duration-1000 hover:text-white ">
                Add to wishlist
              </button>
            </div>
          </div>
          <div class="mt-5">
            <h2 className="text-xl  font-bold ">Here Self Storage</h2>
            <p className="text-md text-gray-600">
              Starting Bid: <span className="text-md font-bold">$100</span>
            </p>
          </div>
        </div>
        <div className="h-full text-center mb-4 drop-shadow-xl bg-white border border-gray-200 text-gray-900  ">
          <div className="relative block w-full group">
            <Image src={product1} alt=".." className="" />
            <div className="absolute w-full bottom-2 right-1/2 transition-all transform translate-x-1/2 translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0">
              <button className="text-sm py-2 px-3 bg-white  hover:bg-red-400 transition duration-1000 hover:text-white ">
                Add to wishlist
              </button>
            </div>
          </div>
          <div class="mt-5">
            <h2 className="text-xl  font-bold ">Here Self Storage</h2>
            <p className="text-md text-gray-600">
              Starting Bid: <span className="text-md font-bold">$100</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
