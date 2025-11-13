import { FlipWords } from "./FlipWords";
import { motion } from "framer-motion";

function HeroText() {
  const words = ["Secure", "Inovative", "Unique", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 text-center md:mt-40 rounded-3xl bg-clip-text md:text-left ">
      <div className="flex-col hidden md:flex text-neutral-300 font-medium">
        <motion.h1
          className="text-4xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
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
      </div>
      <div className="flex flex-col items-center text-center space-y-6 md:hidden">
        <motion.h2
          className="text-3xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          Hi, I'm Aseel
        </motion.h2>
        <div className="flex flex-col ">
          <motion.p
            className="text-6xl "
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Building
          </motion.p>
          <motion.div
            className="text-7xl text-center pl-4"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.4 }}
          >
            <FlipWords words={words} />
          </motion.div>
          <motion.p
            className="text-4xl "
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
