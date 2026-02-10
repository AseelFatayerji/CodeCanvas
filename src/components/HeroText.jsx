import { useMediaQuery } from "react-responsive";
import { useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import { FlipWords } from "./interactive/FlipWords";
import TypeWriter from "./interactive/TypeWriter";

function HeroText({ modelReady }) {
  const sectionRef = useRef(null);
  const isMobile = useMediaQuery({ query: "(max-width: 853px)" });
  const words = ["Secure", "Innovative", "Unique", "Scalable"];
  const controlsDesktop = useAnimation();
  const controlsMobile = useAnimation();
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const spring = useSpring(scrollYProgress, { damping: 30 });
  const pX = !isMobile
    ? useTransform(
        spring,
        [0.5, 1],
        [window.innerWidth * 0.35, -window.innerWidth * 2],
      )
    : 0;
  const pY = isMobile
    ? useTransform(
        spring,
        [0.5, 1],
        [window.innerWidth * 0.35, -window.innerWidth * 2],
      )
    : 0;

  useEffect(() => {
    if (modelReady) {
      controlsDesktop.start("visible");
      controlsMobile.start("visible");
    }
  }, [modelReady, controlsDesktop, controlsMobile]);

  return (
    <div
      ref={sectionRef}
      className="relative px-10 py-4 z-10 mt-20 text-center md:mt-40 rounded-3xl bg-clip-text md:text-left select-none"
    >
      <motion.div
        className=" flex-col hidden md:flex text-neutral-100 font-medium"
        style={{ x: pX, y: pY }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-4xl "
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: 1 }}
        >
          Hi, I'm Aseel
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-6xl "
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A Software Developer <br /> Dedicated to Creating
          </motion.p>
          <motion.div
            className="text-8xl "
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.4 }}
          >
            <FlipWords words={words} />
          </motion.div>
          <motion.p
            className="text-5xl "
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.6 }}
          >
            Coding Solutions
          </motion.p>
        </div>
      </motion.div>
      <div className="flex flex-col items-center text-center space-y-6 md:hidden">
        <motion.h2
          className="text-3xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          Hi, I'm Aseel
        </motion.h2>
        <div className={`flex flex-col text-center`}>
          <motion.p
            className="text-2xl"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A Software Dev
            <br /> Dedicated to
          </motion.p>
          <motion.p
            className={isMobile ? "text-4xl" : "text-6xl"}
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Building
          </motion.p>
          <motion.div
            className={` text-center overflow-hidden w-screen text-6xl`}
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.4 }}
          >
            <TypeWriter data={words} />.
          </motion.div>
          <motion.p
            className={"text-3xl"}
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.6 }}
          >
            Coding Solutions
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default HeroText;
