import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function ParallaxP() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });

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
          backgroundImage: "url(src/assets/backgrounds/space-2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      />

      {/* Planets layer 1 */}
      <motion.div
        className="absolute inset-0 -z-40"
        style={{
          backgroundImage: "url(src/assets/backgrounds/planets-7.png)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
        initial={{ x: "-100%" }}
        animate={{ x: isInView ? "0%" : "-100%" }}
        transition={{ duration, ease }}
      />

      {/* Border */}
      <motion.div
        className="absolute inset-0 -z-40"
        style={{
          backgroundImage: "url(src/assets/backgrounds/border-3.png)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ scale: 4 }}
        animate={{ scale: isInView ? 1 : 4 }}
        transition={{ duration, ease }}
      />
    </section>
  );
}

export default ParallaxP;
