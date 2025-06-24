import { useGLTF } from "@react-three/drei";
import arcade from "../assets/models/project-display.glb";
import { useRef } from "react";
import Timeline from "../components/items/projects_timeline";

function Arcade(props) {
  const ref = useRef();
  const { scene, animation } = useGLTF(arcade);
  return (
    <group
      ref={ref}
      position={props.position}
      scale={props.scale}
      rotation={props.rotation}
    >
      <primitive object={scene} />
      <group position={[0, 155, 0]} scale={5}>
        <Timeline />
      </group>
    </group>
  );
}

export default Arcade;
