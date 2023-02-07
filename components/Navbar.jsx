import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("transparent");
  const [linkColor, setLinkColor] = useState("#ffffff");
  // const [position, setPosition] = useState('fixed')


  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="ease-in-out duration-300 w-full z-50">
        <div className="flex justify-between items-center max-w-6xl h-28 px-5 md:px-10 mx-auto">
          <Image src="/assets/logo.png" className="z-50" alt="logo" height={40} width={280} />
          <div>
            <ul className="hidden md:flex space-x-6 items-center text-white">
              <li className="text-sm uppercase navHover">
                <Link href="/">Home</Link>
              </li>
              <li className="text-sm uppercase navHover">
                <Link href="/#company">UNREAL ENGINE</Link>
              </li>
              <li className="text-sm uppercase navHover">
                <Link href="/#UNITY">UNITY</Link>
              </li>
              <li className="text-sm uppercase navHover">
                <Link href="/#GODOT">GODOT</Link>
              </li>
              <li className="text-sm uppercase navHover">
                <Link href="/#newsletter">Contact</Link>
              </li>
              <li className="text-sm uppercase navHover">
                <Link href="/about">About Us</Link>
              </li>
            </ul>
            {/* Hamburger Icon */}
            <div onClick={handleNav}
              className="md:hidden rounded-full bg-gray-600 p-2 z-[100]">
              <AiOutlineMenu size={25} className="text-white" />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {/* Overlay */}
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full z-50 h-screen bg-black/70"
              : ""
          }>
          {/* Side Drawer Menu */}
          <div
            className={
              nav
                ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] px-8 py-5 ease-in duration-500"
                : "fixed left-[-100%] top-0 px-8 py-5 ease-in duration-500"
            }>
            <div>
              <div className="flex w-full items-center justify-between">
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ml-auto">
                  <AiOutlineClose className="text-black" />
                </div>
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href="/">
                  <li onClick={() => setNav(false)} className="py-4 text-sm uppercase">
                    Home
                  </li>
                </Link>
                <Link href="/#company">
                  <li onClick={() => setNav(false)} className="py-4 text-sm uppercase">
                    UNREAL ENGINE
                  </li>
                </Link>
                <Link href="/#UNITY">
                  <li onClick={() => setNav(false)} className="py-4 text-sm uppercase">
                    UNITY
                  </li>
                </Link>
                <Link href="/#GODOTS">
                  <li onClick={() => setNav(false)} className="py-4 text-sm uppercase">
                    GODOT
                  </li>
                </Link>

                <Link href="/#contact">
                  <li onClick={() => setNav(false)} className="py-4 text-sm uppercase">
                    Contact
                  </li>
                </Link>
                <Link href="/#about">
                  <li onClick={() => setNav(false)} className="py-4 text-sm uppercase">
                    About Us
                  </li>
                </Link>
              </ul>
              <div className="pt-32"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;