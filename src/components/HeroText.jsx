import { useMediaQuery } from "react-responsive";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import { FlipWords } from "./interactive/FlipWords";
import TypeWriter from "./interactive/TypeWriter";

function HeroText() {
  const sectionRef = useRef(null);
  const isMobile = useMediaQuery({ query: "(max-width: 853px)" });
  const words = ["Secure", "Innovative", "Unique", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const spring = useSpring(scrollYProgress, { damping: 30 });
  const pX = useTransform(spring, [0.5, 1], ["0%", "-200%"]);
  return (
    <div
      ref={sectionRef}
      className="relative px-10 z-10 mt-20 text-center md:mt-40 rounded-3xl bg-clip-text md:text-left select-none"
    >
      <motion.div
        className=" flex-col hidden md:flex text-neutral-100 font-medium"
        style={{ x: pX }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-4xl "
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
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
          className={isMobile ? "text-2xl" : "text-3xl"}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          Hi, I'm Aseel
        </motion.h2>
        <div className={`flex flex-col ${isMobile ? "text-center" : ""}`}>
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
            className={` text-center overflow-hidden ${
              isMobile ? "text-6xl" : "text-7xl pl-4"
            }`}
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.4 }}
          >
            <TypeWriter data={words} />
          </motion.div>
          <motion.p
            className={isMobile ? "text-3xl" : "text-4xl"}
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
