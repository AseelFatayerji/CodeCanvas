import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { use, useEffect, useRef } from "react";
import bird from "../assests/models/bird.glb";

function Bird({ isRotating, ...props }) {
  const ref = useRef();
  const { scene, animations } = useGLTF(bird);
  const { actions } = useAnimations(animations, ref);
  
  useEffect(() => {
    if (isRotating) {
      actions["fei"].play();
    } else {
      actions["fei"].stop();
    }
  }, [actions, isRotating]);
  return (
    <mesh
      ref={ref}
      {...props}
      position={ props.position}
      scale={props.scale}
      rotation={[0, 90, 0]}
    >
      <primitive object={scene} />
    </mesh>
  );
}

export default Bird;
