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
      screenPose = [-20, -125, -120];
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
      <div className="inset-0 fixed flex self-center justify-self-center backdrop-blur-md bg-white/5 w-100 h-73 mr-26 mb-15">
        <div className="flex justify-evenly w-full h-full ">
          <div className="w-40 p-5"><img src="src\assets\backgrounds\character.png" className="h-full"/></div>
          <div className=" text-black font-bold text-pretty w-60">
            I'm Aseel Fatayerji, an artist specializing in concept art,
            illustration, and 3D modeling. I create imaginative worlds and
            unique characters, by blending traditional techniques with digital
            tools. Let’s collaborate to bring your vision to life!.
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
