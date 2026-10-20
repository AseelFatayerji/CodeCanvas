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

function TechStacks({isMobile}) {
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
    <div>
      <motion.div
        className="relative px-10 pt-20 pb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          variants={slideIn}
          className="w-fit -rotate-3 sedgwick-ave-regular"
        >
          <h3 className="bg-[#C7FF2F] text-black text-xl md:text-2xl px-5 py-2 rounded-xl w-fit -mb-3">
            MY TECH
          </h3>
          <h3 className="bg-white text-black text-xl md:text-2xl px-5 py-2 rounded-xl w-fit ml-14">
            STACKS
          </h3>
        </motion.div>
        <Decor
          className="absolute left-25 top-3 scale-80 md:top-6 md:scale-100 md:left-30"
          loop="bob"
          inView
          delay={0.6}
          duration="4.5s"
        >
          <Arrow curves={1} direction="right" color="#ffffff" size={210} />
        </Decor>
      </motion.div>
      <ScrollVelocity
        rows={[first_line, second_line]}
        velocity={60}
        itemSize={isMobile? 45 : 56}
        gap={isMobile? 25 : 48}
        fadeEdges
        draggable
        pauseOnHover
        skewWithVelocity={8}
      />
    </div>
  );
}

export default TechStacks;