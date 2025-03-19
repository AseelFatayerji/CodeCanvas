import { useAnimations, useGLTF, useCursor } from "@react-three/drei";
import controller from "../assets/models/JoyStick.glb";
import { useRef, useState, useEffect } from "react";

function JoyStick(props) {
  const ref = useRef();
  const { scene, animations } = useGLTF(controller);
  const { actions } = useAnimations(animations, ref);

  return (
    <>
      <mesh
        ref={ref}
        position={props.position}
        scale={props.scale}
        rotation={[0.05, 0, 0]}
      >
        <primitive object={scene} />
      </mesh>
    </>
  );
}

export default JoyStick;
