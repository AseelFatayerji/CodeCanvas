import { useAnimations, useGLTF, useCursor } from "@react-three/drei";
import { Html } from "@react-three/drei";
import lamp from "../assets/models/lamp.glb";
import { useRef, useState, useEffect } from "react";

function Lamp(props) {
  const ref = useRef();
  const { scene, animations } = useGLTF(lamp);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    actions["move"].play();
    scene.traverse((child) => {
      if (child.isMesh && child.material.map) {
        const material = child.material;
        material.transparent = true;
        material.alphaMap = material.map;
        material.alphaTest = 0.1;
        material.depthWrite = false;
      }
    });
  }, [scene]);
  return (
    <>
      <mesh
        ref={ref}
        position={props.position}
        scale={props.scale}
        rotation={[0, 0, 0]}
      >
        <primitive object={scene} />
      </mesh>
    </>
  );
}

export default Lamp;
