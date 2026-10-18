import { motion } from "framer-motion";

const LOOPS = {
  rotate: "anim-rotate",
  bounce: "anim-bounce",
  bob: "anim-bob",
  pulse: "anim-pulse",
};

function Decor({
  children,
  className = "",
  loop,
  delay = 0.4,
  duration,
  loopDelay,
  distance,
  origin,
  min,
  inView = false,
}) {
  const target = { scale: 1, opacity: 1 };
  const reveal = inView
    ? { whileInView: target, viewport: { once: true, amount: 0.3 } }
    : { animate: target };

  return (
    <motion.div
      className={className}
      initial={{ scale: 0.05, opacity: 0 }}
      {...reveal}
      transition={{
        delay,
        scale: { type: "spring", stiffness: 180, damping: 14 },
        opacity: { duration: 0.2 },
      }}
    >
      <div
        className={`flex ${loop ? LOOPS[loop] : ""}`}
        style={{
          "--dur": duration,
          "--delay": loopDelay,
          "--dist": distance,
          "--origin": origin,
          "--min": min,
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}

export default Decor;