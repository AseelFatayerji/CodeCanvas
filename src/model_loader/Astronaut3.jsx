import { useAnimations, useGLTF } from "@react-three/drei";
import astronaut from "../assets/models/astronaut3.glb";
import { use, useEffect, useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";
import { useFrame } from "@react-three/fiber";

function Astronaut(prop) {
  const ref = useRef();
  const { scene, animations } = useGLTF(astronaut);
  const { actions } = useAnimations(animations, ref);
  useEffect(() => {
    if (animations.length > 0) {
      actions[animations[0].name].play();
    }
  }, [actions, animations]);

  const yPosition = useMotionValue(5);
  const smooth = useSpring(yPosition, { damping: 30 });
  useEffect(() => {
    smooth.set(prop.position[1]);
  }, [smooth]);
  
  useFrame(() => {
    ref.current.position.y = smooth.get();
  });

  return (
    <group
      ref={ref}
      position={prop.position}
      rotation={[-Math.PI / 2 + 0.2, 0.9, 1.2]}
      scale={prop.scale}
    >
      <primitive object={scene} />
    </group>
  );
}

export default Astronaut;
