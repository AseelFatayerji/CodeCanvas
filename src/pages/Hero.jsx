import { Canvas } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBg from "../components/ParallaxBg";
import Astronaut from "../model_loader/Astronaut";
import Loader from "../components/loaders/model-loader";
import { Suspense } from "react";

function Hero() {
  return (
    <div className="flex justify-center md:justify-start min-h-screen overflow-hidden">
      <HeroText />
      <ParallaxBg />
      <figure className="absolute inset-0 w-[90vw] h-[100vw]">
        <Canvas>
          <Suspense fallback={<Loader />}>
            <Astronaut />
          </Suspense>
        </Canvas>
      </figure>
    </div>
  );
}

export default Hero;
