import React from "react";

function Section_4() {
  return (
    <div className="flex relative flex-col items-center justify-center w-full gap-10 pt-[2rem] mt-10">
      <h1 className="text-5xl text-center font-Neue">
        Top <span className="text-[#24CFA6]">companies</span> our students{" "}
        <br />
        working with
      </h1>
      <div className="flex items-center justify-center gap-4 px-4">
        <div className="w-36 h-36">
          <img
            className="w-full h-full"
            src="https://ik.imagekit.io/sheryians/companies-logo/dark-theme/netlinklogo_A5k0VjsZL.webp?updatedAt=1713975960145"
            alt="Netlink Logo"
          />
        </div>
        <div className="w-36 h-36">
          <img
            className="w-full h-full"
            src="https://ik.imagekit.io/sheryians/companies-logo/dark-theme/mindtree%20logo_sj0PIBh91l.webp?updatedAt=1713975960351"
            alt="Mindtree Logo"
          />
        </div>
        <div className="w-36 h-36">
          <img
            className="w-full h-full"
            src="https://ik.imagekit.io/sheryians/companies-logo/dark-theme/wallmartlogo_vR8JHQ_h20.webp?updatedAt=1713975960123"
            alt="Mindtree Logo"
          />
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 px-4 -mt-10">
        <div className="w-36 h-36">
          <img
            className="w-full h-full"
            src="https://ik.imagekit.io/sheryians/companies-logo/dark-theme/rapidops%20logo_ki9BX1CCNf.webp?updatedAt=1713975960174"
            alt="Netlink Logo"
          />
        </div>
        <div className="w-36 h-36">
          <img
            className="w-full h-full"
            src="https://ik.imagekit.io/sheryians/companies-logo/dark-theme/tcs%20logo_PglyFlXHbC.webp?updatedAt=1713975960122"
            alt="Mindtree Logo"
          />
        </div>
        <div className="w-36 h-36">
          <img
            className="w-full h-full"
            src="https://ik.imagekit.io/sheryians/companies-logo/dark-theme/amazon%20logo_WQtU99KWC.webp?updatedAt=1713975960172"
            alt="Mindtree Logo"
          />
        </div>
        <div className="w-36 h-36">
          <img
            className="w-full h-full"
            src="https://ik.imagekit.io/sheryians/companies-logo/dark-theme/wipro%20logo_ezOSPx52r8.webp?updatedAt=1713975960224"
            alt="Mindtree Logo"
          />
        </div>
        <div className="w-36 h-36">
          <img
            className="w-full h-full"
            src="https://ik.imagekit.io/sheryians/companies-logo/dark-theme/gfg%20logo_gixPTWASN.webp?updatedAt=1713975960103"
            alt="Mindtree Logo"
          />
        </div>
      </div>
      <button className="px-8 py-2 text-2xl font-semibold rounded-md bg-btn font-Neue text-btn-font shine">
        Explore Courses
      </button>
      <div className="z-[-2] top-0 hidden md:block shape5 "></div>
    </div>
  );
}

export default Section_4;
