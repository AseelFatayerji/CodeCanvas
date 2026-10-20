import React from "react";
import { motion } from "framer-motion";

import Arrow from "../shapes/Arrow";
import Squiggle from "../shapes/Squiggle";
import Decor from "../shapes/Decor";
import ScrollVelocity from "../interactive/ScrollingImage";

import {
  faAndroid,
  faBootstrap,
  faCss3,
  faGithub,
  faHtml5,
  faJava,
  faJs,
  faNodeJs,
  faNpm,
  faPhp,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const slideIn = {
  hidden: { x: -200, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

function TechStacks({ isMobile }) {
  const first_line = [
    { icon: faNodeJs, color: "#3C873A" },
    { icon: faReact, color: "#61DBFB" },
    { icon: faPhp, color: "#8892be" },
    { icon: faCss3, color: "#2965f1" },
    { icon: faJava, color: "#ED8B00" },
    { icon: faGithub, color: "#ffffff" },
    { icon: faJs, color: "#f0db4f" },
    { icon: faHtml5, color: "#f06529" },
    { icon: faNpm, color: "#cb3837" },
    { icon: faPython, color: "#FFE873" },
    { icon: faAndroid, color: "#A4C639" },
    { img: "https://ik.imagekit.io/sas2seqly/portfolio/mysql.png" },
    { img: "https://ik.imagekit.io/sas2seqly/portfolio/microsoftsql.png" },
  ];

  const second_line = [
    { img: "https://ik.imagekit.io/sas2seqly/portfolio/blender.png" },
    { img: "https://ik.imagekit.io/sas2seqly/portfolio/illustrator.png" },
    { img: "https://ik.imagekit.io/sas2seqly/portfolio/photoshop.png" },
    { img: "https://ik.imagekit.io/sas2seqly/portfolio/figma.png" },
    { img: "https://ik.imagekit.io/sas2seqly/portfolio/canva.png" },
    { img: "https://ik.imagekit.io/sas2seqly/portfolio/blockbench.png" },
    { img: "https://ik.imagekit.io/sas2seqly/portfolio/MongoDB.png" },
    { icon: faBootstrap, color: "#8312FA" },
  ];
  return (
    <div className="flex flex-col gap-4 pb-5">
      <motion.div
        className="relative flex px-10 pb-8 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          variants={slideIn}
          className="absolute inset-x-0 flex items-center justify-center gap-3 md:gap-5 -rotate-3 text-3xl md:text-5xl sedgwick-ave-regular"
        >
          <Decor
            loop="bob"
            inView
            delay={0.6}
            duration="4.5s"
            draggable={!isMobile}
          >
            <Squiggle
              className="h-4 w-10 md:h-6 md:w-14"
              color="#ffffff"
              strokeWidth={2}
            />
          </Decor>

          <span>Tech Stacks</span>

          <Decor
            loop="bob"
            inView
            delay={0.8}
            duration="3.8s"
            draggable={!isMobile}
          >
            <Squiggle
              className="h-4 w-10 md:h-6 md:w-14"
              color="#ffffff"
              strokeWidth={2}
            />
          </Decor>
        </motion.div>
      </motion.div>
      <ScrollVelocity
        rows={[first_line, second_line]}
        velocity={60}
        itemSize={isMobile ? 45 : 56}
        gap={isMobile ? 25 : 48}
        fadeEdges
        draggable
        pauseOnHover
        skewWithVelocity={8}
      />
    </div>
  );
}

export default TechStacks;
