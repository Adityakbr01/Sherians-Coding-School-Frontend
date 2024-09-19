import React from "react";

function Section_2() {
  return (
    <div className="relative flex flex-col items-center justify-center gap-12 px-8 -mt-10 pb-14">
      <div className="absolute z-[-2] top-0 right-0 w-[80vw] h-[80vh] shape4 "></div>

      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-xl text-center sm:text-2xl md:text-3xl lg:text-4xl font-Neue">
          We do whatever it takes to help you <br />
          <span className="text-[#1bd1a6]">understand the concepts</span>
          {/* <div className=" z-[-1] top-0 rounded-full -right-[10rem] w-[80vw] h-[80vh] shape4 "></div>
          <div className=" z-[-1] top-[10rem] rounded-full -left-[10rem] w-[10vw] h-[10vh] shape4 "></div> */}
        </h2>
      </div>
      <div className="w-full md:max-w-[70%] mx-auto flex items-center justify-center h-auto pb-[56.25%] relative">
        <iframe
          className="absolute top-0 left-0 inline-block w-full h-full max-h-[30rem]  rounded-xl"
          src="https://www.youtube.com/embed/60SRAWmMXyc?si=JV4aMreCdhCjdWkE&modestbranding=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <button className="px-4 py-2 text-sm font-semibold rounded-md 2xl:-mt-[20rem] shine md:text-lg md:px-10 bg-btn font-Neue text-btn-font">
        Explore free learning
      </button>
    </div>
  );
}

export default Section_2;
