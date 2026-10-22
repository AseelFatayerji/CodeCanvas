import { memo, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const EYES = [
  { left: 32, top: 39, w: 13, h: 9, pupil: 6 },
  { left: 56, top: 41, w: 13, h: 9, pupil: 6 },
];

const SPRING = { stiffness: 420, damping: 32, mass: 0.6 };
const OUTLINE = 3;

const clamp = (value) => Math.max(-1, Math.min(1, value));

function MovingEyes({
  src,
  eyes = EYES,
  whiteColor = "#ffffff",
  pupilColor = "#141414",
  travel = 1,
  upTravel = 0.5,
  sensitivity = 3,
  debug = false,
}) {
  const box = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, SPRING);
  const y = useSpring(rawY, SPRING);

  useEffect(() => {
    const eyeLine = eyes.reduce((sum, e) => sum + e.top, 0) / eyes.length / 100;
    const eyeCenter =
      eyes.reduce((sum, e) => sum + e.left, 0) / eyes.length / 100;

    const onMove = (e) => {
      if (e.pointerType !== "mouse" || !box.current) return;
      const r = box.current.getBoundingClientRect();

      const reachX = Math.min(
        ...eyes.map(
          (eye) => (((eye.w - eye.pupil) / 100) * r.width - OUTLINE * 2) / 2,
        ),
      );
      const reachY = Math.min(
        ...eyes.map(
          (eye) =>
            ((eye.h / 100) * r.height -
              (eye.pupil / 100) * r.width -
              OUTLINE * 2) /
            2,
        ),
      );

      const cx = r.left + r.width * eyeCenter;
      const cy = r.top + r.height * eyeLine;
      let dx = clamp(((e.clientX - cx) / window.innerWidth) * sensitivity);
      let dy = clamp(((e.clientY - cy) / window.innerHeight) * sensitivity);

      const len = Math.hypot(dx, dy);
      if (len > 1) {
        dx /= len;
        dy /= len;
      }

      rawX.set(dx * Math.max(reachX, 0) * travel);
      rawY.set(dy * Math.max(reachY, 0) * travel * (dy < 0 ? upTravel : 1));
    };

    const onLeave = () => {
      rawX.set(0);
      rawY.set(0);
    };

    window.addEventListener("pointermove", onMove);
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, [eyes, travel, upTravel, sensitivity, rawX, rawY]);

  return (
    <div ref={box} className="relative h-full w-full">
      {eyes.map((eye, i) => (
        <div
          key={i}
          className={`absolute rounded-[50%] ${
            debug ? "outline-2 outline-red-500" : ""
          }`}
          style={{
            left: `${eye.left}%`,
            top: `${eye.top}%`,
            width: `${eye.w}%`,
            height: `${eye.h}%`,
            transform: "translate(-50%, -50%)",
            backgroundColor: whiteColor,
          }}
        >
          <motion.div
            className="absolute left-1/2 top-1/2 aspect-square rounded-full outline-3 outline-amber-950"
            style={{
              width: `${(eye.pupil / eye.w) * 100}%`,
              marginLeft: `${-(eye.pupil / eye.w) * 50}%`,
              marginTop: `${-(eye.pupil / eye.w) * 50}%`,
              backgroundColor: pupilColor,
              x,
              y,
            }}
          />
        </div>
      ))}

      <img
        src={src}
        alt=""
        className={`pointer-events-none absolute inset-0 h-full w-full object-contain ${
          debug ? "opacity-60" : ""
        }`}
        draggable={false}
      />
    </div>
  );
}

export default memo(MovingEyes);
