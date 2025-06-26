import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import "../../css/backgrounds.css";
import Loader from "../../components/loaders/model-loader";
import Arcade from "../../model_loader/project_arcade";
import JoyStick2 from "../../model_loader/controller2";

function Projects() {
  const screenSize = window.innerWidth < 700;
  const adjustModel = () => {
    let screenScale = null;
    let screenPose;
    let rotation = [0.05, 0, 0];
    if (screenSize) {
      screenScale = [0.11, 0.11, 0.11];
      screenPose = [0, -17, -16];
    } else {
      screenScale = [1.5, 1.5, 1.5];
      screenPose = [0, -200, -160];
    }
    return [screenScale, screenPose, rotation];
  };
  const [modelScale, modelPose, rotation] = adjustModel();
  return (
    <section className="w-lvw h-lvh items-center wooden">
      <Canvas
        id="modelLoader"
        className="w-lvw h-lvh bg-transparent z-0"
        camera={{ near: 0.1, far: 1000, position: [0, 0, 0] }}
      >
        <Suspense fallback={<Loader />}>
          <ambientLight position={[2, 2, 2]} intensity={2} />
          <JoyStick2 position={modelPose} scale={modelScale} />
          <Arcade position={modelPose} scale={modelScale} rotation={rotation} />
        </Suspense>
      </Canvas>
    </section>
  );
}

export default Projects;
