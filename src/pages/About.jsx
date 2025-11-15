import React, { Suspense, useRef } from "react";
import Card from "../components/interactive/Card";
import {
  faCss,
  faCss3,
  faCss3Alt,
  faFigma,
  faGithub,
  faJava,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { Canvas, useFrame } from "@react-three/fiber";
import Astronaut from "../model_loader/Astronaut2";
import Loader from "../components/loaders/model-loader";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import CopyBtn from "../components/CopyBtn";
import Stack from "../components/Stack";

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

function About() {
  const isMobile = useMediaQuery({ query: "(max-width: 853px)" });
  const gridContainer = useRef();

  return (
    <section
      id="About"
      className="w-full h-fit text-center inset-0 -z-50 border2 pt-16"
    >
      <h2 className="text-center text-4xl select-none">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[15rem] md:px-36 px-10">
        <div className="flex grid-1">
          <figure className="absolute inset-0 w-full h-full m-0 ">
            <Canvas>
              <Suspense fallback={<Loader />}>
                <Astronaut
                  position={isMobile ? [0.2, -1, 0] : [-0.5, 1, 0]}
                  scale={isMobile ? 1 : 2}
                />
                <Rig />
              </Suspense>
            </Canvas>
          </figure>
        </div>
        <div className="grid-default-color grid-2">
          <div
            ref={gridContainer}
            className="flex items-center justify-center h-full w-full"
          >
            <p className="flex items-end text-5xl text-gray-500 select-none">
              CODE IS ART
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="MAINTAIN"
              ref={gridContainer}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="SOLID"
              ref={gridContainer}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="DESIGN PRINCIPLES"
              ref={gridContainer}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="UI/UX"
              ref={gridContainer}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "80%" }}
              text="UPHOLD"
              ref={gridContainer}
            />
            <Card
              style={{ rotate: "25deg", top: "40%", right: "20%" }}
              text="BEST"
              ref={gridContainer}
            />
            <Card
              style={{ rotate: "55deg", bottom: "30%", left: "20%" }}
              text="CODING PRACTICIES"
              ref={gridContainer}
            />
            <Card
              style={{
                color: "#2965f1",
                rotate: "30deg",
                top: "70%",
                left: "70%",
              }}
              img={faCss}
              ref={gridContainer}
            />
            <Card
              style={{
                colo: "#fffff",
                rotate: "-45deg",
                top: "70%",
                left: "25%",
              }}
              img={faGithub}
              ref={gridContainer}
            />
            <Card
              style={{
                color: "#3C873A",
                rotate: "-45deg",
                top: "8%",
                left: "10%",
              }}
              img={faNodeJs}
              ref={gridContainer}
            />
            <Card
              style={{
                color: "#61DBFB",
                rotate: "20deg",
                top: "80%",
                left: "10%",
              }}
              img={faReact}
              ref={gridContainer}
            />
            <Card
              style={{
                color: "#ED8B00",
                rotate: "20deg",
                top: "30%",
                right: "10%",
              }}
              img={faJava}
              ref={gridContainer}
            />
            <Card
              style={{
                color: "#a259ff",
                rotate: "80deg",
                top: "20%",
                right: "70%",
              }}
              img={faFigma}
              ref={gridContainer}
            />
          </div>
        </div>
        <div className="flex items-end grid-black-color grid-3">
          {/* <img src="" className="absolute " /> */}
          <div className="z-10 text-left items-start select-none">
            <p className="text-md">Hi I'm Aseel Fatayerji</p>
            <p className="text-xs text-neutral-400 text-pretty">
              Over the last 5 years, I've developed my coding skills in
              frontend, backend, design and security to deliver secure, dynamic
              and responsive web and software applications
            </p>
          </div>
        </div>
        <div className="relative grid-special-color grid-4 h-40 flex items-center justify-center">
          <div className="absolute top-4 right-4">
            <CopyBtn />
          </div>
          <p className="text-center text-lg select-none">
            Do you want to start a project together?
          </p>
        </div>

        <div className=" grid-default-color grid-5">
          <div className="z-10 w-[50%] text-left text-pretty">
            <p className="text-2xl">Tech Stacks</p>
            <p className="text-md text-gray-400">
              I specialize in a variety of tools and frameworks that allow me to
              build robust and responsive applications.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Stack />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
