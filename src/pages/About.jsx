import React, { useMemo, useRef } from "react";
import {
  faCss,
  faFigma,
  faGithub,
  faJava,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { useMediaQuery } from "react-responsive";
import { motion, useInView } from "framer-motion";


import CopyBtn from "../components/CopyBtn";
import Stack from "../components/Stack";
import ParallaxA from "../components/parallax/ParrallaxAbout";
import Card from "../components/interactive/Card";

function About() {
  const gridContainer = useRef();
  const sectionRef = useRef(null);
  const isMobile = useMediaQuery({ query: "(max-width: 853px)" });

  const isInView = useInView(sectionRef, { once: false });

  const duration = 1.2;
  const ease = "easeInOut";

  const cards = useMemo(
    () => [
      { text: "MAINTAIN", rotate: "75deg", top: "30%", left: "20%" },
      { text: "SOLID", rotate: "-30deg", top: "60%", left: "45%" },
      {
        text: "DESIGN PRINCIPLES",
        rotate: "90deg",
        bottom: "30%",
        left: "70%",
      },
      { text: "UI/UX", rotate: "-45deg", top: "55%", left: "0%" },
      { text: "UPHOLD", rotate: "20deg", top: "10%", left: "80%" },
      { text: "BEST", rotate: "25deg", top: "40%", right: "20%" },
      {
        text: "CODING PRACTICIES",
        rotate: "55deg",
        bottom: "30%",
        left: "20%",
      },
      {
        img: faCss,
        rotate: "30deg",
        top: "70%",
        left: "70%",
        color: "#2965f1",
      },
      { img: faGithub, rotate: "-45deg", top: "70%", left: "25%" },
      {
        img: faNodeJs,
        rotate: "-45deg",
        top: "8%",
        left: "10%",
        color: "#3C873A",
      },
      {
        img: faReact,
        rotate: "20deg",
        top: "80%",
        left: "10%",
        color: "#61DBFB",
      },
      {
        img: faJava,
        rotate: "20deg",
        top: "30%",
        right: "10%",
        color: "#ED8B00",
      },
      {
        img: faFigma,
        rotate: "80deg",
        top: "20%",
        right: "70%",
        color: "#ff3737",
      },
    ],
    []
  );
  return (
    <section
      ref={sectionRef}
      id="About"
      className="w-full min-h-screen text-center inset-0 pt-8 relative"
    >
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration, ease }}
      >
        <h2 className="text-center text-3xl md:text-5xl select-none py-8">About Me</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[12rem] md:px-36 px-5 ">
          <div className={`flex grid-1 ${isMobile ? "hidden" : ""}`}></div>
          <div className="grid-default-color grid-2 ">
            <div
              ref={gridContainer}
              className="flex items-center  select-none justify-center h-full w-full"
            >
              <p
                className={`flex items-end text-gray-500 ${
                  isMobile ? "text-3xl" : "text-5xl"
                }`}
              >
                CODE IS ART
              </p>
              {cards.map((card, idx) => (
                <Card
                  key={idx}
                  text={card.text}
                  img={card.img}
                  style={{
                    rotate: card.rotate,
                    top: card.top,
                    bottom: card.bottom,
                    left: card.left,
                    right: card.right,
                    color: card.color,
                    scale: isMobile ? 0.8 : 1,
                    position: "absolute",
                  }}
                />
              ))}
            </div>
          </div>
          <div className="flex items-end grid-black-color grid-3">
            <div className="z-10 text-left rain items-start select-none">
              <p className="text-xl md:pt-6 pt-3">Hi I'm Aseel Fatayerji</p>
              <p className="text-xs text-neutral-200 text-pretty">
                Over the last 5 years, I've developed my coding skills in
                frontend, backend, design and security to deliver secure,
                dynamic and responsive web and software applications
              </p>
            </div>
          </div>
          <div className="relative grid-special-color grid-4 h-40 flex items-center justify-center">
            <div className="absolute top-4 right-4">
              <CopyBtn />
            </div>
            <p className="text-center md:text-lg text-l select-none">
              Do you want to start a project together?
            </p>
          </div>

          <div className=" grid-default-color grid-5">
            <div className="z-10 w-[50%] text-left text-pretty select-none">
              <p className={isMobile ? "text-lg" : "text-2xl"}>Tech Stacks</p>
              <p
                className={`text-gray-400 ${isMobile ? "text-xs" : "text-md "}`}
              >
                I specialize in a variety of tools and frameworks that allow me
                to build robust and responsive applications.
              </p>
            </div>
            <div
              className={`absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] ${
                isMobile ? "scale-80" : "scale-125"
              }`}
            >
              <Stack />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
