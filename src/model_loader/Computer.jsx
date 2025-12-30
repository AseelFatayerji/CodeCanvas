import { useAnimations, useGLTF } from "@react-three/drei";
import computerModel from "../assets/models/Computer.glb";
import { useEffect, useMemo, useRef } from "react";
import { SkeletonUtils } from "three-stdlib";

function Computer(prop) {
  const ref = useRef();
  const { scene } = useGLTF(computerModel);

  const clone =  useMemo(() => SkeletonUtils.clone(scene), [scene]);


  return (
    <group
      ref={ref}
      position={prop.position}
      rotation={prop.rotation}
      scale={prop.scale}
    >
      <primitive object={clone} />
    </group>
  );
}

export default Computer;
