import { useGLTF } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import street from "../assets/models/street-base.glb";
import { useThree } from "@react-three/fiber";

function Model({ isRotating, setRotating, ...props }) {
  const { nodes, materials } = useGLTF(island);
  const [rotation, setRotation] = useState(props.rotation);
  const modelRef = useRef();

  const [modelRotationZ, setModelRotationZ] = useState(0);

  const onKeyDown = (event) => {
    switch (event.key) {
      case "ArrowLeft":
        setRotating(true);
        setModelRotationZ((prevRotation) => prevRotation + 0.05);
        break;
      case "ArrowRight":
        setRotating(true);
        setModelRotationZ((prevRotation) => prevRotation - 0.05);
        break;
      default:
        break;
    }
  };
  const onKeyUp = (event) => {
    switch (event.key) {
      case "ArrowLeft":
        setRotating(false);
        break;
      case "ArrowRight":
        setRotating(false);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, []);

  useEffect(() => {
    setRotation([0, 0, modelRotationZ]);
  }, [modelRotationZ]);

  return (
    <>
      <group {...props}>
        <group ref={modelRef} rotation={rotation} scale={props.scale}>
          <mesh
            geometry={nodes.Object_2.geometry}
            material={materials.palette}
            position={props.position}
          />
        </group>
      </group>
    </>
  );
}

export default Model;
