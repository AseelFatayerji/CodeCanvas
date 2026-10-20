import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue } from "framer-motion";

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
  draggable = true,
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [bounds, setBounds] = useState({
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  });

  const measure = useCallback(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const w = el.offsetWidth;
    const h = el.offsetHeight;

    const left = rect.left + rect.width / 2 - w / 2 - x.get();
    const top = rect.top + rect.height / 2 - h / 2 - y.get() + window.scrollY;

    const vw = document.documentElement.clientWidth;
    const docH = document.documentElement.scrollHeight;

    setBounds({
      left: -left,
      right: vw - (left + w),
      top: -top,
      bottom: docH - (top + h),
    });
  }, [x, y]);

  useEffect(() => {
    if (!draggable) return;
    measure();
    window.addEventListener("resize", measure);

    const ro = new ResizeObserver(measure);
    ro.observe(document.body);
    return () => {
      window.removeEventListener("resize", measure);
      ro.disconnect();
    };
  }, [draggable, measure]);

  const target = { scale: 1, opacity: 1 };
  const reveal = inView
    ? { whileInView: target, viewport: { once: true, amount: 0.3 } }
    : { animate: target };

  const dragProps = draggable
    ? {
        drag: true,
        dragConstraints: bounds,
        dragElastic: 0.25,
        dragMomentum: true,
        dragTransition: { bounceStiffness: 500, bounceDamping: 10 },
        whileDrag: { scale: 1.15, cursor: "grabbing" },
        onPointerDown: measure,
      }
    : {};

  return (
    <motion.div
      ref={ref}
      className={`${className} ${draggable ? "cursor-grab select-none" : ""}`}
      style={{ x, y }}
      initial={{ scale: 0.05, opacity: 0 }}
      {...reveal}
      {...dragProps}
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
