import { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring, 
} from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Model from "./Model";

export default function GlobalModel({ sectionCount }) {
  const isMobile = useMediaQuery({ query: "(max-width: 853px)" });
  const { scrollYProgress } = useScroll();
  const spring = useSpring(scrollYProgress, { damping: 30, stiffness: 100 });

  const [modelProps, setModelProps] = useState({
    poseM: [0, 0, 0],
    poseD: [1, -0.3, 0],
    rotation: [-Math.PI / 2 + 0.2, 1.5, 1.2],
    animation: 0,
  });

  const poseMMap = [
    [1, 0, 0],
    [0, -0.5, 0],
    [0.5, 0, 0],
    [-0.5, 0.3, 0],
    [0, 0, 0],
  ];
  const poseDMap = [
    [1, -0.3, 0],
    [-2, -0.2, -0.5],
    [2.2, -0.7, 0],
    [-0.5, -0.5, 0],
    [-12, -0.5, 0],
  ];
  const rotationMap = [
    [-Math.PI / 2 + 0.2, 1.5, 1.2],
    [0.2, 0.5, 0],
    [0.2, 0.5, 0],
    [0.1, 0.3, 0],
    [0.1, 0.3, 0],
  ];
  const animationMap = [0, 1, 2, 3, 4];

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      const maxIndex = sectionCount - 1;

      let sectionFloat = latest * maxIndex;
      sectionFloat = Math.max(0, Math.min(sectionFloat, maxIndex));

      const current = Math.floor(sectionFloat);
      const next = Math.min(current + 1, maxIndex);
      const t = sectionFloat - current;

      const lerp = (a, b, f) => a.map((v, i) => v + (b[i] - v) * f);

      setModelProps({
        poseM: lerp(poseMMap[current], poseMMap[next], t),
        poseD: lerp(poseDMap[current], poseDMap[next], t),
        rotation: lerp(rotationMap[current], rotationMap[next], t),
        animation: t < 0.5 ? animationMap[current] : animationMap[next]
      });
    });

    return () => unsubscribe();
  }, [spring, sectionCount]);

  if (isMobile) return null;

  return (
    <motion.div className="fixed inset-0 pointer-events-none z-0">
      <Model {...modelProps} scale={1.7}/>
    </motion.div>
  );
}
