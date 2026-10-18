import { motion } from "framer-motion";
const BouncyText = ({ text = "Bouncy Animation" }) => {
  return (
    <h2 className="text-4xl md:text-6xl font-bold text-center">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{
            y: 0,
          }}
          animate={{
            y: [0, -20, 0],
            transition: {
              delay: i * 0.1,
              duration: 0.6,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            },
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h2>
  );
};
const BouncyView = ({text}) => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <BouncyText text={text} />
    </div>
  );
};
export default BouncyView;
