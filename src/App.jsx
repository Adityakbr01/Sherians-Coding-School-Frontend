import React, { useEffect } from "react";
import Sections_1 from "./sections/Sections_1";
import Navbar from "./components/Navbar";
import Section_2 from "./sections/Section_2";
import Section_3 from "./sections/Section_3";
import Section_4 from "./sections/Section_4";
import Lenis from "@studio-freight/lenis";

function App() {
  // useEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 1.2,
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  //     smooth: true,
  //   });

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);

  //   return () => {
  //     lenis.destroy();
  //   };
  // }, []);

  return (
    <div className="overflow-hidden">
      <Navbar />
      <main className="pb-64">
        <Sections_1 />
        <Section_2 />
        <Section_3 />
        <Section_4 />
      </main>
    </div>
  );
}

export default App;
