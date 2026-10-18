import { motion } from "framer-motion";

const LOOPS = {
  rotate: "anim-rotate",
  bounce: "anim-bounce",
  bob: "anim-bob",
};

function Decor({
  children,
  className = "",
  loop,
  delay = 0.4,
  duration,
  loopDelay,
  distance,
}) {
  return (
    <motion.div
      className={className}
      initial={{ scale: 0.05, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        delay,
        scale: { type: "spring", stiffness: 180, damping: 14 },
        opacity: { duration: 0.2 },
      }}
    >
      <div
        className={`flex ${loop ? LOOPS[loop] : ""}`}
        style={{ "--dur": duration, "--delay": loopDelay, "--dist": distance }}
      >
        {children}
      </div>
    </motion.div>
  );
}

export default Decor;