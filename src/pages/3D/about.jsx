import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import Loader from "../../components/loaders/loader";
import Computer from "../../model_loader/pc_screen";
import Globe from "../../model_loader/globe";
import Lamp from "../../model_loader/lamp";
import AboutText from "../../components/text/about_text";

function About() {
  const screenSize = window.innerWidth < 760;
  const adjustModel = () => {
    let screenScale = null;
    let screenPose;
    let rotation = [0, 0, 0];
    if (screenSize) {
      screenScale = [0.11, 0.11, 0.11];
      screenPose = [0, -14, -14];
    } else {
      screenScale = [1.3, 1.3, 1.3];
      screenPose = [-1, -130, -150];
    }
    return [screenScale, screenPose, rotation];
  };
  const [modelScale, modelPose, rotation] = adjustModel();
  return (
    <section className="w-lvw h-lvh items-center bookshelf">
      <Canvas
        id="modelLoader"
        className="w-lvw h-lvh bg-transparent z-0"
        camera={{ near: 0.1, far: 1000, position: [0, 0, 0] }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[-1, 2, 1]} intensity={1.5} />
          <directionalLight position={[-2, -1, -1]} intensity={1} />
          <directionalLight position={[1, 1, 1]} intensity={1.5} />
          <Lamp position={modelPose} scale={modelScale} />
          <Globe position={modelPose} scale={modelScale} />
          <Computer
            position={modelPose}
            scale={modelScale}
            rotation={rotation}
          />
          <AboutText screenSize={screenSize} />
        </Suspense>
      </Canvas>
    </section>
  );
}

export default About;
