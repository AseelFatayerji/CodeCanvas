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
      <group
        ref={ref}
        position={props.position}
        scale={props.scale}
        rotation={[0, 0, 0]}
        onClick={handleClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {hovered && !clicked && (
          <group position={[130, 130, 0]} scale={10}>
            <Html transform center>
              <div
                className="backdrop-blur-sm bg-white/30 font-bold rounded-md px-2 py-1 text-black text-center text-sm"
                onClick={handleClick}
              >
                Spin
              </div>
            </Html>
          </group>
        )}

        <primitive object={scene} />
      </group>
    </>
  );
}

export default Globe;
