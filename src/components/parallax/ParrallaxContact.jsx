import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function ParallaxC() {
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
          backgroundImage: "url(src/assets/backgrounds/space-3.jpg)",
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
          backgroundImage: "url(src/assets/backgrounds/border-4.png)",
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

export default ParallaxC;
