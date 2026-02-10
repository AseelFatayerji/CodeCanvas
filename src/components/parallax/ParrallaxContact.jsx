import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function ParallaxC({ isMobile }) {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, { once: false });

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
            "url(https://ik.imagekit.io/sas2seqly/portfolio/space-3.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      />

      {/* Border */}
      <motion.div
        className="absolute inset-0 -z-40"
        style={{
          backgroundImage:
            "url(https://ik.imagekit.io/sas2seqly/portfolio/border-4.png)",
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

export default ParallaxC;
