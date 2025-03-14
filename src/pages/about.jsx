import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";

import "../css/backgrounds.css";
import Loader from "../components/loader";
import Computer from "../model_loader/pc_screen";
import Globe from "../model_loader/globe";

function About() {
  const screenSize = window.innerWidth < 760;
  const adjustModel = () => {
    let screenScale = null;
    let screenPose;
    let rotation = [0, 0, 0];
    if (screenSize) {
      screenScale = [0.2, 0.2, 0.2];
      screenPose = [0, -15, -25];
    } else {
      screenScale = [1.7, 1.7, 1.7];
      screenPose = [-1, -124, -120];
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
          <Globe position={modelPose} scale={modelScale} />
          <Computer
            position={modelPose}
            scale={modelScale}
            rotation={rotation}
          />
          <Html>
            <div
              className={
                screenSize
                  ? "inset-0 fixed text-white text-sm flex self-center justify-self-center rounded-lg backdrop-blur-md bg-white/5 w-80 h-60 p-2"
                  : "inset-0 fixed text-white text-m flex self-center justify-self-center w-93 h-68 mb-10 p-2"
              }
            >
              <div className="w-full h-full ">
                <div className="w-full flex justify-center items-center">
                  <img
                    src="src\assets\backgrounds\character.png"
                    className={`h-full ${screenSize ? "w-25 mb-2" : "w-30 mb-3"}`}
                  />
                </div>
                <div className="text-center font-bold text-pretty w-full">
                  I'm Aseel Fatayerji, an artist specializing in concept art,
                  and 3D modeling. I create colorful worlds and unique
                  characters, by blending traditional techniques with digital
                  tools. Let’s collaborate to bring your vision to life!.
                </div>
              </div>
            </div>
          </Html>
        </Suspense>
      </Canvas>
    </section>
  );
}

export default About;
