import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import island from '../assests/models/island.glb'

export function Model(props) {
  const islandRef = useRef();

  const { nodes, materials } = useGLTF(island);
  return (
    <group {...props}>
      <group rotation={props.rotation} scale={props.scale}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.palette}
          position={props.position}
        />
      </group>
    </group>
  );
}

export default Model;
