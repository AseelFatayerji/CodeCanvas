import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useState, useRef, useEffect } from "react";
import Loader from "../components/loader";

import Model from "../model_loader/testscene";
import Sky from "../model_loader/sky";
import Bird from "../model_loader/testcharacter";
import Popup from "../components/popup";

function Home() {
  const [isRotating, setRotating] = useState(false);
  const adjustModel = () => {
    let screenScale = null;
    let screenPose;
    let rotation = [-1.5, 0, 0];
    if (window.innerWidth < 768) {      
      screenScale = [2, 2, 2];
      screenPose = [-25, -30, -30];
    } else {
      screenScale = [1.5, 1.5, 1.5];
      screenPose = [-25, -40, -40];
    }
    return [screenScale, screenPose, rotation];
  };
  const adjustCharacter = () => {
    let characterScale = null;
    let characterPose;
    let rotation = [-1.5, 0, 0];
    if (window.innerWidth < 768) {
      characterScale = [4, 4, 4];
      characterPose = [0, -20, 150];
    } else {
      characterScale = [5, 5, 5];
      characterPose = [0, -20, 150];
    }
    return [characterScale, characterPose, rotation];
  };

  const hours = new Date().getHours();
  const isDayTime = hours > 6 && hours < 20;
  const [modelScale, modelPose, rotation] = adjustModel();
  const [characterScale, characterPose] = adjustCharacter();
  return (
    <section className="w-lvw h-lvh items-center justify-end">
      <div>
        {/* {currentStage && <Popup currentStage={currentStage} />} currentStage are insdide the model */}
      </div>
      <Canvas
        id="modelLoader"
        className={`w-lvw h-lvh bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000, position: [0, 0, 200] }}
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
          <Bird
            isRotating={isRotating}
            setRotating={setRotating}
            position={characterPose}
            scale={characterScale}
          />
        </Suspense>
      </Canvas>
    </section>
  );
}

export default Home;
