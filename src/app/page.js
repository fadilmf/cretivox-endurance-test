"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Description from "@/components/Description";
import { animatePageIn } from "@/utils/animation";
import { useEffect, useLayoutEffect, useRef } from "react";

export default function Home() {
  const box = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      box.current,
      {
        x: 0,
        rotation: 0,
      },
      {
        x: 300,
        rotation: 360,
        scrollTrigger: {
          trigger: box.current,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  });
  useEffect(() => {
    async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    };

    animatePageIn();
  }, []);

  return (
    <div>
      <div className="flex flex-col h-screen">
        <div className="h-4/5 flex flex-col justify-center items-center">
          <h1 className="mt-10 text-7xl">
            Hi I'm <span className=" font-extrabold">Fadil</span>
          </h1>
          <h1 className="text-4xl">I make website and mobile apps with love</h1>
          <div
            ref={box}
            className="bg-slate-400 absolute left-52 w-52 h-52 -z-10"
          ></div>
        </div>
        <div className="bg-black h-1/5"></div>
      </div>

      <div className="bg-black h-screen">
        <div className="">
          <Description />
        </div>
      </div>
    </div>
  );
}
