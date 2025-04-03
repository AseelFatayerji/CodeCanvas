import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import "../../css/backgrounds.css";
import Loader from "../../components/loaders/loader";
import Arcade from "../../model_loader/arcade_inside";
import JoyStick from "../../model_loader/controller";
import Carousal from "../../components/text/gallery_carousal";

function Gallery() {
  const screenSize = window.innerWidth < 760;
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
          <JoyStick position={modelPose} scale={modelScale} />
          <Arcade position={modelPose} scale={modelScale} rotation={rotation} />
          <Carousal screenSize={screenSize} />
        </Suspense>
      </Canvas>
    </section>
  );
}

export default Gallery;
