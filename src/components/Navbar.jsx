import React, { useEffect, useState } from "react";
import { Squeeze as Hamburger } from "hamburger-react";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../Features/ToggleBtn";
import { RiMoonClearLine } from "react-icons/ri";
import { MdOutlineWbSunny } from "react-icons/md";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const toggleState = useSelector((state) => state.toggle);
  const dispatch = useDispatch();
  console.log(toggleState);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === null) {
      localStorage.setItem("theme", toggleState);
    } else if (storedTheme === "true" && !toggleState) {
      dispatch(toggle());
    } else if (storedTheme === "false" && toggleState) {
      dispatch(toggle());
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", toggleState);
    if (toggleState) {
      document.body.style.background = "#0C0C0C";
      document.body.style.color = "#fff";
    } else {
      document.body.style.background = "#fff";
      document.body.style.color = "#0C0C0C";
    }
  }, [toggleState]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
      setScrolled(currentScrollPos > window.innerHeight * 0.1);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <nav
      className={`flex w-[100%] px-[5%] fixed z-[1000] left-1/2 -translate-x-1/2 top-0 py-1 md:py-3 mx-auto justify-between items-center transition-transform duration-300 ${
        visible ? "translate-y-0" : "md:-translate-y-[20vh] "
      } ${scrolled ? "gl" : ""}`}
    >
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
        <ul className="flex items-center gap-10 text-sm font-light font-Neue">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Courses</li>
          <li className="cursor-pointer font-Neue">Re-imaging</li>
          <li className="px-5 py-1 text-base rounded-sm cursor-pointer shine text-btn-font bg-btn font-Helvetica">
            Sign in
          </li>

          <li
            onClick={() => dispatch(toggle())}
            className={`relative px-8 py-3 text-base border ${
              toggleState ? "border-white" : "border-black"
            } rounded-full cursor-pointer font-Helvetica`}
          >
            <div
              className={`absolute w-6 h-6 top-1/2 -translate-y-1/2 py-2 flex items-center justify-center ${
                toggleState ? "bg-white" : "bg-black"
              } rounded-full transition-all duration-300 ease-in-out ${
                toggleState ? "right-0" : "right-[62%]"
              }`}
            >
              {toggleState ? (
                <RiMoonClearLine className="text-[#2bd1ff]" />
              ) : (
                <MdOutlineWbSunny className="text-[#ffdd35]" />
              )}
            </div>
          </li>
        </ul>
      </div>

      <div
        className={`relative z-50 block  md:hidden ${
          (toggleState && isOpen) ||
          (toggleState && !isOpen) ||
          (!toggleState && isOpen)
            ? "text-white"
            : "text-black"
        }`}
        onClick={() => setOpen(!isOpen)}
      >
        <Hamburger size={22} />
      </div>
      {/* Mobile Menu */}
      <div
        className={`absolute md:hidden ${
          isOpen ? "right-0 " : "right-[-100%]"
        } w-full h-screen bg-[#0C0C0C] text-white top-0 right transition-all duration-300 ease-in-out`}
      >
        <div className="w-full p-6 border-b border-white">
          <h1 className="text-2xl text-white font-Neue">Menu</h1>
        </div>
        <ul className="flex flex-col items-start gap-6 p-8 text-2xl font-light text-white opacity-70 text-opacity-60 font-Neue">
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
