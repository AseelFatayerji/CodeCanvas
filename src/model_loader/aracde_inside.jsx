import { useGLTF } from "@react-three/drei";
import arcade from "../assets/models/arcade-display.glb";
import { useRef } from "react";

function Arcade(props) {
  const ref = useRef();
  const { scene, animation } = useGLTF(arcade);
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

export default Arcade;
