import { Loader } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { Suspense } from "react";
import Astronaut from "../model_loader/Astronaut3";
import { easing } from "maath";
import { useMediaQuery } from "react-responsive";

function Rig() {
  const { camera, mouse } = useThree();
  return useFrame((state, delta) => {
    easing.damp3(
      camera.position,
      [mouse.x / 10, 1 + mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}
function Services() {
  const isMobile = useMediaQuery({ query: "(max-width: 853px)" });

  return (
    <section
      id="Services"
      className="w-full h-screen text-center inset-0 border"
    >
      <h2 className="text-center text-4xl pt-16 select-none">Services</h2>
      <div className="flex w-full gap-10 px-10 py-10">
        <div className="flex-1 grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[15rem]">
          <div className="flex items-end grid-default-color">Service</div>
          <div className="flex items-end grid-default-color">Service</div>
          <div className="flex items-end grid-default-color">Service</div>
          <div className="flex items-end grid-default-color">Service</div>
          <div className="flex items-end grid-default-color">Service</div>
          <div className="flex items-end grid-default-color">Service</div>
        </div>
        {isMobile ? (
          <></>
        ) : (
          <div className="flex-1">
            {/* <Canvas>
            <Suspense fallback={<Loader />}>
              <Astronaut
                position={isMobile ? [0.2, -1, 0] : [1.5, 0, 0]}
                scale={isMobile ? 1 : 1.5}
              />
              <Rig />
              {typeof window !== "undefined" && <Rig />}
            </Suspense>
          </Canvas> */}
          </div>
        )}
      </div>
    </section>
  );
}

export default Services;
