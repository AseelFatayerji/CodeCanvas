import { useGLTF } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import island from "../assests/models/island.glb";
import { useThree } from "@react-three/fiber";

function Model({ isRotating, setRotating, ...props }) {
  const { nodes, materials } = useGLTF(island);
  const [rotation, setRotation] = useState(props.rotation);
  const modelRef = useRef();
  const { gl } = useThree();

  const [modelRotationZ, setModelRotationZ] = useState(0);

  const onKeyDown = (event) => {
    switch (event.key) {
      case "ArrowLeft":
        setModelRotationZ((prevRotation) => prevRotation + 0.05); // Rotate counterclockwise on Z-axis
        break;
      case "ArrowRight":
        setModelRotationZ((prevRotation) => prevRotation - 0.05); // Rotate clockwise on Z-axis
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    setRotation([0, 0, modelRotationZ]); // Only rotate around the Z-axis
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
