import React from "react";
import "./Radil.css";
import CountUp from "react-countup";
import { useSelector } from "react-redux";

function Sections_1() {
  const toggleState = useSelector((state) => state.toggle.toggleState);
  return (
    <div className="relative flex flex-col items-center h-screen overflow-x-hidden md:pb-10 md:mb-[10rem] justify-evenly md:justify-between ">
      <div
        className={`Top-Blur-Container absolute ${
          toggleState ? "-top-[17vh]" : "-top-[40vh]"
        }`}
      >
        <div
          className={`absolute ${
            toggleState ? "bg-[#26deff]" : "bg-[#24cfa7]"
          } z-[-1] top-0 rounded-full left-1/2 -translate-x-1/2 w-[40vw] h-[40vh] shape1`}
        ></div>
        <div
          className={`absolute ${
            toggleState ? "bg-[#26deff]" : "bg-[#24cfa7]"
          } z-[-1] top-0 rounded-full left-1/2 -translate-x-1/2 w-[40vw] h-[40vh] shape2`}
        ></div>
        <div
          className={`absolute ${
            toggleState ? "bg-[#26deff]" : "bg-[#24cfa7]"
          } z-[-1] top-0 rounded-full left-1/2 -translate-x-1/2 w-[40vw] h-[40vh] shape3`}
        ></div>
      </div>
      <div className="top"></div>
      <div className="relative flex flex-col items-center gap-10 md:justify-center middle">
        {/* <h1>We only teach what we are really  good at.</h1> */}
        <h1 className="lg:text-7xl md:text-6xl sm:text-5xl text-[2.4em] text-center font-extralight w-[96vw]  transition-all ease-linear duration-300 leading-[0.9] font-Neue">
          We only <span className="text-[#1bd1a6]">teach</span> <br /> what we
          are truly <br /> exceptional at.
        </h1>
        <div className="relative">
          <button className="px-4 py-2 text-sm font-semibold rounded-md shine md:text-lg md:px-10 bg-btn font-Neue text-btn-font">
            Check Courses-Make an Impact
          </button>
          <div className="md:absolute md:flex  hidden  md:-right-[70%] lg:-right[10rem] -bottom-[36%] items-center justify-center gap-10">
            <div className=" w-[14rem] p-4">
              <p className="text-[0.8rem] font-extralight leading-[1.1] font-helvetica_light">
                Get ready to{" "}
                <span className="text-[#27E0B3]">acclerate your career</span>{" "}
                with customized courses and leave your mark on the world.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center mb-[] md:mb-0 justify-between gap-10 md:-mt-10 sm:px-0 bottom font-Neue lg:gap-36">
        <h2 className="flex flex-col items-center justify-center text-center font-Helvetica -gap-4">
          <span className="text-xl font-semibold sm:text-4xl font-Helvetica">
            <CountUp
              start={0}
              end={28}
              duration={2.75}
              separator=","
              suffix="k+"
            />
          </span>
          <span className="text-sm font-Neue md:">Students Taought</span>
        </h2>
        <h2 className="flex flex-col items-center justify-center text-center -gap-4">
          <span className="text-xl font-semibold sm:text-4xl font-Helvetica">
            <CountUp
              start={0}
              end={11}
              duration={2.75}
              separator=","
              suffix="k+"
            />
          </span>
          <span className="text-sm font-Neue md:text-xl">Instructors</span>
        </h2>
        <h2 className="flex flex-col items-center justify-center text-center -gap-4">
          <span className="text-xl font-semibold sm:text-4xl font-Helvetica">
            <CountUp
              start={0}
              end={430}
              duration={4.75}
              separator=","
              suffix="k+"
            />
          </span>
          <span className="text-sm font-Neue md:text-xl">Youtube Subs.</span>
        </h2>
      </div>
    </div>
  );
  8;
}

export default Sections_1;
