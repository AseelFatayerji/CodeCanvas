import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import { easing } from "maath";
import { useMediaQuery } from "react-responsive";

import Loader from "./loaders/model-loader";
import Astronaut from "../model_loader/Astronaut";
import Glass from "../model_loader/Glass";

import ParallaxBg from "./parallax/ParallaxBg";
import ParallaxA from "./parallax/ParrallaxAbout";
import ParallaxS from "./parallax/ParrallaxService";
import ParallaxP from "./parallax/ParrallaxProject";
import ParallaxC from "./parallax/ParrallaxContact";

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

function Model(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 853px)" });
  const parallax = [ParallaxBg, ParallaxA, ParallaxS, ParallaxP, ParallaxC];
  const CurrentBg = parallax[props.animation];
  
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 pointer-events-none -z-10">
        {CurrentBg && <CurrentBg />}
      </div>
      <figure className="absolute inset-0 m-0 z-10">
        <Canvas className="w-full h-full pointer-events-none camera={{ position: [0, 1, 5] }}">
          <Suspense fallback={<Loader />}>
            <ambientLight intensity={2.5} />
            <Astronaut
              position={isMobile ? props.poseM : props.poseD}
              scale={props.scale}
              animation={props.animation < 4 ? props.animation : 0}
              rotation={props.rotation}
            />
            <Glass
              position={isMobile ? props.poseM : props.poseD}
              scale={props.scale}
              animation={props.animation < 4 ? props.animation : 0}
              rotation={props.rotation}
            />
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </div>
  );
}

export default Model;
