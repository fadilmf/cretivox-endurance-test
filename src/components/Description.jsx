import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState } from "react";

export default function Description() {
  const [selectedItem, setSelectedItem] = useState(0);

  const items = ["About", "Tech Stack"];

  const descriptions = [
    "I am a final year computer science student at IPB University",
    "React, Vue, Nextjs",
  ];
  return (
    <div>
      <div className="mb-44 ms-56">
        {items.map((item, index) => {
          return (
            <div onMouseOver={() => setSelectedItem(index)}>
              <AnimatedText key={index}>{item}</AnimatedText>;
            </div>
          );
        })}
      </div>
      <div className="text-white text-5xl px-10 w-screen text-right">
        <h1>"{descriptions[selectedItem]}"</h1>
      </div>
    </div>
  );
}

function AnimatedText({ children }) {
  const text = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(text.current, {
      scrollTrigger: {
        trigger: text.current,
        start: "0px bottom",
        end: "bottom+=400px bottom",
        scrub: true,
      },
      left: "-200px",
      opacity: 1,
    });
  }, []);
  return (
    <div
      ref={text}
      className="relative border-t-2 text-white uppercase text-9xl hover:cursor-default"
    >
      {children}
    </div>
  );
}
