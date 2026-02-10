import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

function ParallaxS() {
  const sectionRef = useRef(null);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isInView = useInView(sectionRef, { once: false });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const pX = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const pY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const duration = 1.2;
  const ease = "easeInOut";

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full pointer-events-none overflow-hidden -z-50"
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
            "url(https://ik.imagekit.io/sas2seqly/portfolio/planets-6.png)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          x: isMobile ? pX : undefined,
        }}
        initial={!isMobile ? { x: "-100%" } : false}
        animate={!isMobile ? { x: isInView ? "0%" : "-100%" } : false}
        transition={{ duration, ease }}
      />

      {/* Planets layer 2 */}
      <motion.div
        className="absolute inset-0 -z-40"
        style={{
          backgroundImage:
            "url(https://ik.imagekit.io/sas2seqly/portfolio/planets-5.png)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          x: isMobile ? pY : undefined,
        }}
        initial={!isMobile ? { x: "-100%" } : false}
        animate={!isMobile ? { x: isInView ? "0%" : "-100%" } : false}
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
        }}
        initial={!isMobile ? { scale: 4 } : false}
        animate={!isMobile ? { scale: isInView ? 1 : 4 } : false}
        transition={{ duration, ease }}
      />
    </section>
  );
}

export default ParallaxS;
