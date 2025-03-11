import { useGLTF } from "@react-three/drei";
import computer from "../assets/models/retro.glb";
import { useRef } from "react";

function Computer(props) {
  const ref = useRef();
  const { scene, animation } = useGLTF(computer);
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
