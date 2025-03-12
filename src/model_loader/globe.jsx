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
        <Html>
          <div className="backdrop-blur-sm bg-white/30 fixed font-bold rounded-md right-50 w-15 h-min p-2 text-black text-center text-sm top-60">
            Spin
          </div>
        </Html>
      )}

      <mesh
        ref={ref}
        position={props.position}
        scale={props.scale}
        rotation={[0, 0, 0]}
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
