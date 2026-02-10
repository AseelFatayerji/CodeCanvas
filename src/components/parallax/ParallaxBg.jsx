import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function ParallaxBg({ isMobile }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const pX = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);
  const pY = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);
  const shipY = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);
  const duration = 0.2;
  const ease = "easeInOut";

  return (
    <section
      ref={sectionRef}
      className={`
    pointer-events-none overflow-hidden
    ${isMobile ? "absolute inset-0  -z-1" : "relative inset-0 h-screen -z-50"}
  `}
    >
      {/* Space background */}
      <motion.div
        className="absolute inset-0 -z-50"
        style={{
          backgroundImage:
            "url(https://ik.imagekit.io/sas2seqly/portfolio/space.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          transformOrigin: "center bottom",
        }}
        initial={!isMobile ? { opacity: 0 } : false}
        animate={!isMobile ? { opacity: isInView ? 1 : 0 } : false}
        transition={{ duration: 0.1, ease: "easeInOut" }}
      />

      {/* Planets layer 1 */}
      <motion.div
        className="absolute inset-0 -z-40"
        style={{
          backgroundImage:
            "url(https://ik.imagekit.io/sas2seqly/portfolio/planets.png)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          x: isMobile ? pX : undefined,
          transformOrigin: "center bottom",
        }}
        initial={!isMobile ? { x: "100%" } : false}
        animate={!isMobile ? { x: isInView ? "0%" : "100%" } : false}
        transition={{ duration, ease }}
      />

      {/* Planets layer 2 */}
      <motion.div
        className="absolute inset-0 -z-40"
        style={{
          backgroundImage:
            "url(https://ik.imagekit.io/sas2seqly/portfolio/planets-2.png)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          x: isMobile ? pY : undefined,
          transformOrigin: "center bottom",
        }}
        initial={!isMobile ? { x: "-100%" } : false}
        animate={!isMobile ? { x: isInView ? "0%" : "-100%" } : false}
        transition={{ duration, ease }}
      />

      {/* Ship */}
      <motion.div
        className="absolute inset-0 -z-40"
        style={{
          backgroundImage:
            "url(https://ik.imagekit.io/sas2seqly/portfolio/ship.png)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          y: isMobile ? shipY : undefined,
          transformOrigin: "center bottom",
        }}
        initial={!isMobile ? { y: "-100%" } : false}
        animate={!isMobile ? { y: isInView ? "0%" : "-100%" } : false}
        transition={{ duration, ease }}
      />

      {/* Border */}
      <motion.div
        className="absolute inset-0 -z-40"
        style={{
          backgroundImage:
            "url(https://ik.imagekit.io/sas2seqly/portfolio/border.png)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          transformOrigin: "center bottom",
        }}
        initial={!isMobile ? { scale: 4 } : false}
        animate={!isMobile ? { scale: isInView ? 1 : 4 } : false}
        transition={{ duration, ease }}
      />
    </section>
  );
}

export default ParallaxBg;
