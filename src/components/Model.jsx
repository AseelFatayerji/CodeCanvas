import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
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

function ModelContent({ props, onReady }) {
  const isMobile = useMediaQuery({ query: "(max-width: 853px)" });
  const readyCalled = useRef(false);

  useFrame(() => {
    if (!readyCalled.current) {
      readyCalled.current = true;
      onReady?.();
    }
  });

  return (
    <>
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
    </>
  );
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
      {!isMobile && <figure className="absolute inset-0 m-0 z-10">
        <Canvas
          className="w-full h-full pointer-events-none"
          camera={{ position: [0, 1, 5] }}
        >
          <Suspense fallback={<Loader />}>
            <ModelContent isMobile={isMobile} props={props} onReady={props.onReady} />
          </Suspense>
        </Canvas>
      </figure>}
    </div>
  );
}

export default Model;
