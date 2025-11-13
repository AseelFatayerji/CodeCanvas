import { motion, useScroll, useSpring, useTransform } from "framer-motion";

function ParallaxBg() {
  const { scrollYProgress } = useScroll();

  const spring = useSpring(scrollYProgress, { damping: 30 });
  const pY = useTransform(spring, [0, 0.5], ["0%", "70%"]);
  const p2X = useTransform(spring, [0, 0.5], ["0%", "-20%"]);
  const sY = useTransform(spring, [0, 0.5], ["0%", "-30%"]);
  const bY = useTransform(spring, [0, 0.5], ["0%", "00%"]);

  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        {/* Space */}
        <div
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundImage: "url(src/assets/backgrounds/space.jpg)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
        {/* Planets */}
        <motion.div
          className="absolute inset-0 -z-40"
          style={{
            y: pY,
            backgroundImage: "url(src/assets/backgrounds/planets.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
        {/* Planets-2 */}
        <motion.div
          className="absolute inset-0 -z-40"
          style={{
            x: p2X,
            backgroundImage: "url(src/assets/backgrounds/planets-2.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
        {/* Spaceship */}
        <motion.div
          className="absolute inset-0 -z-40"
          style={{
            y: sY,
            backgroundImage: "url(src/assets/backgrounds/ship.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
        {/* border */}
        <motion.div
          className="absolute inset-0 -z-40"
          style={{
            y: bY,
            backgroundImage: "url(src/assets/backgrounds/border.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
      </div>
    </section>
  );
}

export default ParallaxBg;
