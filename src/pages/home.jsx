import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useState, useRef, useEffect } from "react";
import Loader from "../components/loader";

import Model from "../model_loader/testscene";
import Sky from "../model_loader/sky";
import Bird from "../model_loader/testcharacter";

function Home() {
  const [isRotating, setRotating] = useState(false);

  const adjustModel = () => {
    let screenScale = null;
    let screenPose;
    let rotation = [-1.5, 0, 0];
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPose = [-14, -6.5, -43];
    } else {
      screenScale = [1.5, 1.5, 1.5];
      screenPose = [-20, -20, -30];
    }
    return [screenScale, screenPose, rotation];
  };

  const hours = new Date().getHours();
  const isDayTime = hours > 6 && hours < 20;
  const [modelScale, modelPose, rotation] = adjustModel();

  return (
    <section className="w-lvw h-lvh items-center justify-end">
      <Canvas
        id="modelLoader"
        className={`w-lvw h-lvh bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000, position: [0, 0, 100] }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2.5} />
          <ambientLight intensity={0.5} />
          <spotLight />
          <Sky isDay={isDayTime} />
          <Model
            position={modelPose}
            scale={modelScale}
            rotation={rotation}
            isRotating={isRotating}
            setRotating={setRotating}
          />
          {/* <Bird /> */}

        </Suspense>
      </Canvas>
    </section>
  );
}

export default Home;
