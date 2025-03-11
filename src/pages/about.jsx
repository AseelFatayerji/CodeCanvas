import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/loader";
import Computer from "../model_loader/pc_screen";
import "../css/backgrounds.css";
import Globe from "../model_loader/globe";
function About() {
  const adjustModel = () => {
    let screenScale = null;
    let screenPose;
    let rotation = [0, 0, 0];
    if (window.innerWidth < 768) {
      screenScale = [0.2, 0.2, 0.2];
      screenPose = [5, -20, -35];
    } else {
      screenScale = [1.7, 1.7, 1.7];
      screenPose = [-20, -110, -140];
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
          <directionalLight position={[1, -1, -1]} intensity={1.5} />
          <directionalLight position={[1, 1, 1]} intensity={1.5} />
          <Globe position={modelPose} scale={modelScale} />
          <Computer
            position={modelPose}
            scale={modelScale}
            rotation={rotation}
          />
        </Suspense>
      </Canvas>
      <div className="inset-0 fixed flex self-center justify-self-center backdrop-blur-md bg-white/5 w-90 h-65 mr-23 mb-32">
        hi
      </div>
    </section>
  );
}

export default About;
