import { useAnimations, useGLTF } from "@react-three/drei";
import astronaut from "../assets/models/SpaceGirl.glb";
import { useEffect, useMemo, useRef } from "react";
import { useSpring } from "framer-motion";
import { SkeletonUtils } from "three-stdlib";

function Astronaut({ position, rotation, scale, animation }) {
  const ref = useRef();
  const { scene, animations } = useGLTF(astronaut, true);
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (!animations.length || !actions) return;

    Object.values(actions).forEach((a) => a.stop());
    const clipName = animations[animation].name;
    actions[clipName]?.reset().fadeIn(0.2).play();
    actions[clipName].timeScale = 0.1;
  }, [animation]);

  const y = useSpring(position[1], { damping: 30, stiffness: 100 });

  return (
    <group
      ref={ref}
      position={[position[0], y.get(), position[2]]}
      rotation={rotation}
      scale={scale}
    >
      <group position={[0, position[1], 0]}>
        <primitive object={clone} />
      </group>
    </group>
  );
}

export default Astronaut;
