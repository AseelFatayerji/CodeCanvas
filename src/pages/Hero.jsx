import { Canvas } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBg from "../components/ParallaxBg";
import Astronaut from "../model_loader/Astronaut";
import Loader from "../components/loaders/model-loader";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";

function Hero() {
  const isMobile = useMediaQuery({ query: "(max-width: 853px)" });

  return (
    <div className="flex justify-center md:justify-start min-h-screen">
      <HeroText />
      <ParallaxBg />
      <figure className="absolute inset-0 w-full h-full m-0">
        <Canvas>
          <Suspense fallback={<Loader />}>
            <Astronaut
              position={isMobile ? [0.2, -2.3, 0] : [2, -1, 0]}
              scale={isMobile ? 1 : 2.7}
            />
          </Suspense>
        </Canvas>
      </figure>
    </div>
  );
}

export default Hero;
