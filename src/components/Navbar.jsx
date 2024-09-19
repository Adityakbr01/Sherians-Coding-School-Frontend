import React, { useState } from "react";
// import Hamburger from "hamburger-react";
import { Squeeze as Hamburger } from "hamburger-react";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className="flex w-[100%] px-[5%] fixed z-[1000] left-1/2 -translate-x-1/2 top-4 mx-auto justify-between items-center">
      <div className="flex items-center justify-center gap-2 left">
        <div className="flex items-center w-6 h-6">
          <img
            className="w-full"
            src="https://ik.imagekit.io/sheryians/Sheryians_logo_EzwgcppnD"
            alt=""
          />
        </div>
        <h3 className="flex flex-wrap items-center font-medium font-Neue">
          Sheryians coding school
        </h3>
      </div>
      <div className="hidden right md:flex">
        <ul className="flex items-center gap-12 text-sm font-light font-Neue">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Courses</li>
          <li className="cursor-pointer font-Neue">Re-imaging</li>
          <li className="px-5 py-1 text-base rounded-sm cursor-pointer shine text-btn-font bg-btn font-Helvetica">
            Sign in
          </li>
        </ul>
      </div>
      <div
        className="relative z-50 block md:hidden"
        onClick={() => setOpen(!isOpen)}
      >
        <Hamburger size={22} />
      </div>
      {/* Mobile Menu */}
      <div
        className={`absolute md:hidden ${
          isOpen ? "right-0 " : "right-[-100%]"
        } w-full h-screen bg-[#0C0C0C]  -top-4 right transition-all duration-300 ease-in-out`}
      >
        <div className="w-full p-6 border-b border-white">
          <h1 className="text-2xl text-white font-Neue">Menu</h1>
        </div>
        <ul className="flex flex-col items-start gap-6 p-8 text-2xl font-light opacity-70 text-opacity-60 font-Neue">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Courses</li>
          <li className="cursor-pointer font-Neue">Re-imaging</li>
          <li className="cursor-pointer ">Sign in</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
