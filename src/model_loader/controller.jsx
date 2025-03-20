import { useAnimations, useGLTF } from "@react-three/drei";
import controller from "../assets/models/JoyStick.glb";
import { useRef, useEffect } from "react";

function JoyStick(props) {
  const ref = useRef();
  const { scene, animations } = useGLTF(controller);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowUp":
          actions["up"].play();
          break;
        case "ArrowDown":
          actions["down"].play();
          break;
        case "ArrowLeft":
          actions["left"].play();
          break;
        case "ArrowRight":
          actions["right"].play();
          break;
        default:
          break;
      }
    };
    const handleKeyUp = (event) => {
      switch (event.key) {
        case "ArrowUp":
          actions["up"].stop();
          break;
        case "ArrowDown":
          actions["down"].stop();
          break;
        case "ArrowLeft":
          actions["left"].stop();
          break;
        case "ArrowRight":
          actions["right"].stop();
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
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
