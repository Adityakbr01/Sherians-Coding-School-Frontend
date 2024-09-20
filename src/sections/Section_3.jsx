import React from "react";
import { useSelector } from "react-redux";
import ToggleBtn from "../Features/ToggleBtn";

function Section_3() {
  const toggleState = useSelector((state) => state.toggle);
  console.log(toggleState);
  const data = [
    {
      img: "https://ik.imagekit.io/sheryians/courses_gif/Front-End_Domination__Create_Anything_with_Code-FRONTENDTHUBNAIL_Wf8WqcNJx.jpg",
      title: "Front-End Domination: Create Anything with Code",
      desc: "Domin8 the web game with 'Front-End Domination.'! Nail HTML, CSS, JS, and Solve real problems, dive into fun projects, and be interview-ready! 🚀 💻",
      tags: ["Web Devlopment", "Animation", "Designing"],
      owner: "Harsh & Sharthak",
      price: "4999",
    },
    {
      img: "https://ik.imagekit.io/sheryians/courses_gif/undefined-backend_0.5x_Medium_wgHDU-5rPt.png",
      title: "Back-End Domination: Create Efficient Back-End.",
      desc: "Ready to rule the digital world? Learn to build powerful back-ends that drive websites and apps smoothly. From databases to security, we cover it all.",
      tags: ["Web Devlopment", "Logic Building"],
      owner: "Harsh Sharma",
      price: "5999",
    },
    {
      img: "https://ik.imagekit.io/sheryians/courses_gif/undefined-apti_reasoning_45vyAnZ4y.jpeg",
      title: "Aptitude & Reasoning for Campus Placements",
      desc: "Ace your campus placements! Master aptitude and reasoning with our expert-led course, packed with interactive lessons and practice tests.",
      tags: ["Logic Building", "Aptitude", "Reasoning"],
      owner: "Akarsh Vyas",
      price: "999",
    },
    {
      img: "https://ik.imagekit.io/sheryians/courses_gif/undefined-javaas_Large_jY0Wighav__6PygWBZQ.jpeg",
      title: "Java & DSA Domination",
      desc: "Ace your coding interviews! Master Java and DSA with our expert-led course, packed with interactive lessons and practice tests.",
      tags: ["Programming", "Logic Building"],
      owner: "Adarsh Gupta",
      price: "4999",
    },
  ];
  return (
    <div className="flex flex-col text-white w-full px-[5%] ">
      <h2 className="mb-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-Neue">
        Courses Offered
      </h2>
      <div className="grid grid-cols-1 gap-12 pb-6 overflow-hidden md:gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 card-container">
        {data.map((item, index) => (
          <div key={index}>
            <div className="course-wrapper max-h-[40rem] min-h-[37rem] pb-10 overflow-hidden bg-[#2C2C2C] rounded-md">
              <div className="relative img-course">
                <img src={item.img} alt="" className="w-full h-auto" />
              </div>
              <div className="p-6">
                <div className="flex flex-col gap-8">
                  <h2 className="text-lg sm:text-xl md:text-2xl leading-[0.9] ">
                    {item.title}
                  </h2>
                  <p className="text-[#c6c6c6] leading-[1.3] text-sm sm:text-base">
                    {item.desc.split(" ").slice(0, 10).join(" ")}...
                  </p>
                </div>
              </div>
              <hr />
              <div className="flex flex-wrap gap-3 px-6 py-2">
                {item.tags.map((tag, index) => (
                  <button
                    key={index}
                    className="px-5 shine rounded-md py-2 bg-[#0c0c0c] text-xs sm:text-sm"
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <div className="w-full flex items-center justify-between px-6 bg-[#0c0c0c] p-2">
                <h3 className="text-sm font-medium sm:text-base">
                  <sub className="mr-1 text-xs sm:text-sm text-[#4b4b4b]">
                    By
                  </sub>
                  {item.owner}
                </h3>
                <h3 className="text-sm font-medium sm:text-base">
                  ₹{item.price}
                </h3>
              </div>
              <div className=""></div>
            </div>
            <button className="w-full px-3 py-2 mt-2 text-lg font-semibold text-center rounded-md bg-btn font-Neue text-btn-font shine">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section_3;
