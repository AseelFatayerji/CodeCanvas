import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/loader";
import Model from "../model_loader/testscene";
import Sky from "../model_loader/sky";

function Home() {
  const adjustModel = () => {
    let screenScale = null;
    let screenPose;
    let rotation = [2.4, 0, 0];
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPose = [-14, -6.5, -43];
    } else {
      screenScale = [3, 3, 3];
      screenPose = [-30, 25, -50];
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
        className="w-lvw h-lvh bg-transparent "
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2.5} />
          <ambientLight intensity={0.5} />
          <spotLight />
          <Sky isDay={isDayTime} />
          <Model position={modelPose} scale={modelScale} rotation={rotation} />
        </Suspense>
      </Canvas>
    </section>
  );
}

export default Home;
