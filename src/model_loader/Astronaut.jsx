import { useAnimations, useGLTF } from "@react-three/drei";
import astronaut from "../assets/models/astronaut.glb";
import { useEffect, useRef } from "react";

function Astronaut(prop) {
  const ref = useRef();
  const { scene, animations } = useGLTF(astronaut);
  const { actions } = useAnimations(animations, ref);
  useEffect(() => {
    if (animations.length > 0) {
      actions[animations[0].name].play();
    }
  }, [actions, animations]);
  return (
    <group
      ref={ref}
      position={prop.position || [2, 2, 0]}
      rotation={[(-Math.PI / 2)+0.2, 0.6, 1]}
      scale={prop.scale || 1.3}
    >
      <primitive object={scene} />
    </group>
  );
}

export default Astronaut;
