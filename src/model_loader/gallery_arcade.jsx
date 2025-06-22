import { useGLTF } from "@react-three/drei";
import arcade from "../assets/models/arcade-display.glb";
import { useRef } from "react";
import Carousal from "../components/items/gallery_carousal";

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
      {props.size ? (
        <group position={[-40, 192, 0]}>
          <Carousal size={props.size}/>
        </group>
      ) : (
        <group position={[-40, 180, 0]} >
          <Carousal size={props.size}/>
        </group>
      )}
    </group>
  );
}

export default Arcade;
