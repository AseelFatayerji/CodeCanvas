import { useAnimations, useGLTF } from "@react-three/drei";
import glass from "../assets/models/Glass.glb";
import { useEffect, useMemo, useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";
import { useFrame } from "@react-three/fiber";
import { SkeletonUtils } from "three-stdlib";

function Glass({ position, rotation, scale, animation }) {
  const ref = useRef();
  const { scene, animations } = useGLTF(glass);
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);

  const { actions } = useAnimations(animations, ref);
  useEffect(() => {
    if (animations.length > 0 && actions) {
      Object.values(actions).forEach((a) => a.stop());
      const clipName = animations[animation]?.name;
      if (clipName) {
        actions[clipName]?.reset().fadeIn(0.2).play();
        actions[clipName].timeScale = 0.1;
      }
    }
  }, [animation, actions, animations]);

  const yPosition = useMotionValue(position[1]);
  const smoothY = useSpring(yPosition, { damping: 30, stiffness: 100 });

  useEffect(() => {
    yPosition.set(position[1]);
  }, [position, yPosition]);

  useEffect(() => {
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

  useFrame(() => {
    if (!ref.current) return;
    ref.current.position.x = position[0];
    ref.current.position.y = smoothY.get();
    ref.current.position.z = position[2];

    ref.current.rotation.x = rotation[0];
    ref.current.rotation.y = rotation[1];
    ref.current.rotation.z = rotation[2];
  });

  return (
    <group ref={ref} scale={scale}>
      <primitive object={clone} />
    </group>
  );
}

export default Glass;
