import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function ParallaxP({isMobile}) {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, { once: false });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

 const pX = useTransform(scrollYProgress, [0, 0.5, 1], ["-20%", "0%", "20%"]);

  const duration = 1.2;
  const ease = "easeInOut";

  return (
    <section
      ref={sectionRef}
      className={`
    pointer-events-none overflow-hidden
    ${isMobile ? "absolute inset-0 z-0" : "relative inset-0 h-screen -z-50"}
  `}
    >
      {/* Space background */}
      <motion.div
        className="absolute inset-0 -z-50"
        style={{
          backgroundImage:
            "url(https://ik.imagekit.io/sas2seqly/portfolio/space-2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
        initial={!isMobile ? { opacity: 0 } : false}
        animate={!isMobile ? { opacity: isInView ? 1 : 0 } : false}
        transition={{ duration: 1 }}
      />

      {/* Planets layer 1 */}
      <motion.div
        className="absolute inset-0 -z-40"
        style={{
          backgroundImage:
            "url(https://ik.imagekit.io/sas2seqly/portfolio/planets-7.png)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          x: isMobile ? pX : undefined,
        }}
        initial={!isMobile ? { x: "100%" } : false}
        animate={!isMobile ? { x: isInView ? "0%" : "100%" } : false}
        transition={{ duration, ease }}
      />

      {/* Border */}
      <motion.div
        className="absolute inset-0 -z-40"
        style={{
          backgroundImage:
            "url(https://ik.imagekit.io/sas2seqly/portfolio/border-3.png)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
        initial={!isMobile ? { scale: 4 } : false}
        animate={!isMobile ? { scale: isInView ? 1 : 4 } : false}
        transition={{ duration, ease }}
      />
    </section>
  );
}

export default ParallaxP;
