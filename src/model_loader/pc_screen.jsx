import { useGLTF, useAnimations } from "@react-three/drei";
import computer from "../assets/models/retro.glb";
import { useRef, useEffect } from "react";

function Computer(props) {
  const ref = useRef();
  const { scene, animations } = useGLTF(computer);
  const { actions } = useAnimations(animations, ref);
  useEffect(() => {
    actions["spin"].play();
  }, [actions]);

  return (
    <mesh
      ref={ref}
      position={props.position}
      scale={props.scale}
      rotation={props.rotation}
    >
      <primitive object={scene} />
    </mesh>
  );
}

export default Computer;
