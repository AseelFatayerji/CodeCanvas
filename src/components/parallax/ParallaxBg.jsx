import { motion, useInView} from "framer-motion";
import { useRef } from "react";

function ParallaxBg() {
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
          backgroundImage: "url(src/assets/backgrounds/space.jpg)",
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
          backgroundImage: "url(src/assets/backgrounds/planets.png)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
        initial={{ x: "100%" }}
        animate={{ x: isInView ? "0%" : "100%" }}
        transition={{ duration, ease }}
      />

      {/* Planets layer 2 */}
      <motion.div
        className="absolute inset-0 -z-40"
        style={{
          backgroundImage: "url(src/assets/backgrounds/planets-2.png)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
        initial={{ x: "-100%" }}
        animate={{ x: isInView ? "0%" : "-100%" }}
        transition={{ duration, ease }}
      />

      {/*Ship*/}
      <motion.div
        className="absolute inset-0 -z-40"
        style={{
          backgroundImage: "url(src/assets/backgrounds/ship.png)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
        initial={{ y: "-100%" }}
        animate={{ y: isInView ? "0%" : "-100%" }}
        transition={{ duration, ease }}
      />

      {/* Border */}
      <motion.div
        className="absolute inset-0 -z-40"
        style={{
          backgroundImage: "url(src/assets/backgrounds/border.png)",
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

export default ParallaxBg;
