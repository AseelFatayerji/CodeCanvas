import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import Astronaut from "../model_loader/Astronaut";
import Loader from "../components/loaders/model-loader";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import ParallaxBg from "../components/parallax/ParallaxBg";

function Hero() {
  const isMobile = useMediaQuery({ query: "(max-width: 853px)" });

  return (
    <div id="Hero" className="flex justify-center md:justify-start min-h-screen">
      <HeroText />
     <ParallaxBg/>
      <figure className="absolute inset-0 w-full h-full m-0">
        <Canvas>
          <Suspense fallback={<Loader />}>
            <Astronaut
              position={isMobile ? [0.2, -1 , 0] : [1.5, 0, 0]}
              scale={isMobile ? 1 : 1.5}
            />
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </div>
  );
}
function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;
