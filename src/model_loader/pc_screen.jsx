import { useGLTF, useAnimations, Html } from "@react-three/drei";
import computer from "../assets/models/retro.glb";
import { useRef, useEffect } from "react";
import AboutText from "../components/items/about_text";
import Clock from "../components/functional/clock";

function Computer({ position, rotation, scale, screenSize }) {
  const ref = useRef();
  const { scene, animations } = useGLTF(computer);
  const { actions } = useAnimations(animations, ref);
  useEffect(() => {
    actions["spin"].play();
  }, [actions]);

  return (
    <group ref={ref} position={position} rotation={rotation} scale={scale}>
      <primitive object={scene} />
      <group position={[2, 130, 0]} scale={screenSize ? 6 : 8}>
        <Html transform center>
          <AboutText />
        </Html>
      </group>
      {screenSize ? (
        <></>
      ) : (
        <group position={[-40, 30, 2]} scale={15}>
          <Html transform center>
            <Clock />
          </Html>
        </group>
      )}
    </group>
  );
}

export default Computer;
