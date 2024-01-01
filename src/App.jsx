import { Canvas } from "@react-three/fiber";

import { Experience } from "./components/Experience";
import "./App.css";
import { ScrollControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function App() {
  const ref = useRef();

  useGSAP(
    () => {
      gsap.from(".explorer .intro > h1 span", {
        opacity: 0,
        duration: 0.1,
        stagger: 0.3,
        y: 100,
      });
    },
    { scope: ref }
  );

  const explore = () => {
    gsap.to(".explorer", {
      y: "-100%",
      duration: 3,
      delay: 1,
    });
  };

  return (
    <>
      <div className="explorer">
        <div className="intro" ref={ref}>
          <h1>
            <span>A</span>
            <span>T</span>
            <span>M</span>
            <span>O</span>
            <span>S</span>
          </h1>
          <div className="btn">
            <button onClick={explore}>Explore</button>
          </div>
          <div class="text-rotate">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path
                id="circlePath"
                d="M 50,10
                            a 39,39 0 1,1 0,78
                            a 39,39 0 1,1 0,-78"
              />
              <text
                id="text-rounded"
                text-anchor="middle"
                dominant-baseline="middle"
                x="50%"
                y="50%"
              >
                <textPath href="#circlePath">
                  Exp - Designed by Delogico Systems
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>

      <Canvas>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={5} damping={0.4}>
          <Experience />
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;
