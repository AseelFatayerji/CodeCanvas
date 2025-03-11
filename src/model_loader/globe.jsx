import { useAnimations, useGLTF, useCursor } from "@react-three/drei";
import { Html } from "@react-three/drei";
import globe from "../assets/models/globe.glb";
import { useRef, useState, useEffect } from "react";

function Globe(props) {
  const ref = useRef();
  const { scene, animations } = useGLTF(globe);
  const { actions } = useAnimations(animations, ref);

  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useCursor(hovered);

  const handleClick = () => {
    actions["spin"].setDuration(2).play();
    setClicked(true);

    setTimeout(() => {
      actions["spin"].stop();
      setClicked(false);
    }, 2000);
  };

  useEffect(() => {
    if (clicked) {
      actions["spin"].play();
    }
  }, [clicked, actions]);

  return (
    <>
      {hovered && !clicked && (
        <Html className="top-24 left-68 w-max h-min p-2 rounded-md backdrop-blur-sm bg-white/30 text-black ">
          <p className="text-sm">Click Me</p>
        </Html>
      )}

      <mesh
        ref={ref}
        position={props.position}
        scale={props.scale}
        rotation={[0,0,0]}
        onClick={handleClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <primitive object={scene} />
      </mesh>
    </>
  );
}

export default Globe;
